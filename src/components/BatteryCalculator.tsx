import React from "react";

const BatteryCalculator: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Distance Traveled (km)
          </label>
          <input
            type="number"
            title="Distance Traveled (km)"
            placeholder="Insert distance traveled in kilometers"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Starting Battery Level (%)
          </label>
          <input
            type="number"
            title="Starting Battery Level (%)"
            placeholder="Insert starting battery level in percentage"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ending Battery Level (%)
          </label>
          <input
            type="number"
            title="Ending Battery Level (%)"
            placeholder="Insert ending battery level in percentage"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Performance Metrics</h3>
        <p className="text-sm text-gray-600">
          Enter values above to calculate efficiency
        </p>
      </div>

      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Battery level visualization will appear here</p>
      </div>
    </div>
  );
};

export default BatteryCalculator;