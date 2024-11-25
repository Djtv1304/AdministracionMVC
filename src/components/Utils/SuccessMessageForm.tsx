import React from "react";

interface SuccessMessageFormProps {
    successMessage: string;
}

const SuccessMessageForm: React.FC<SuccessMessageFormProps> = ({ successMessage }) => {
  return (
    <div className="text-sm p-2 rounded-md bg-green-100 text-green-500" role="alert">
      <div className="space-y-2">
        {successMessage}
      </div>
    </div>
  );
}

export default SuccessMessageForm;