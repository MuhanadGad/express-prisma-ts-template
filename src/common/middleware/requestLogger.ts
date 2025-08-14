import { randomUUID } from "node:crypto";
import pino from "pino";
import { env } from "../utils/envConfig";
import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { pinoHttp } from "pino-http";

const logger = pino({
  level: env.isProduction ? "info" : "debug",
  transport: env.isProduction
    ? undefined
    : {
        target: "pino-pretty",
      },
});

const getLogLevel = (status: number) => {
  if (status >= StatusCodes.INTERNAL_SERVER_ERROR) return "error";
  if (status >= StatusCodes.BAD_REQUEST) return "warn";
  return "info";
};

const addRequestId = (req: Request, res: Response, next: NextFunction) => {
  const existingId = req.headers["x-request-id"] as string;
  const requestId = existingId || randomUUID();

  req.headers["x-request-id"] = requestId;
  res.setHeader("X-Request-Id", requestId);

  next();
};

const httpLogger = pinoHttp({
  logger,
  genReqId: (req) => req.headers["x-request-id"] as string,
  customLogLevel: (_req, res) => getLogLevel(res.statusCode),
  customSuccessMessage: (req) => `${req.method} ${req.url} completed`,
  customErrorMessage: (_req, res) =>
    `Request failed with status code: ${res.statusCode}`,
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      id: req.id,
    }),
  },
});

export default [addRequestId, httpLogger];
