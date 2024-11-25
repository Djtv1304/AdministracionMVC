import React from "react";

interface ErrorMessageFormProps {
  errorMessage: string;
}

const ErrorMessageForm: React.FC<ErrorMessageFormProps> = ({ errorMessage }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
      role="alert"
    >
      <span className="block sm:inline">{errorMessage}</span>
    </div>
  );
};

export default ErrorMessageForm;
