package com.project.sustainability.exception;

public class ResetCustomException extends RuntimeException {
    public ResetCustomException(String message) {
        super(message);
    }

    public ResetCustomException(String message, Throwable cause) {
        super(message, cause);
    }
}