import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-secondary/10 border border-secondary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-secondary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-secondary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 text-secondary">Rate Limit Reached</h3>
            <p className="text-gray-200 mb-1">
              You've made too many requests in a short period. Please wait and try again few seconds later!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;