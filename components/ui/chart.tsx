"use client";

import * as React from "react";
import { cn } from "./utils";

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  };
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, config, children, ...props }, ref) => {
    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          className={cn("chart-container", className)}
          {...props}
        >
          {children}
        </div>
      </ChartContext.Provider>
    );
  }
);
ChartContainer.displayName = "ChartContainer";

// Simple placeholder components
const ChartTooltip = ({ children }: { children?: React.ReactNode }) => (
  <div>{children}</div>
);

const ChartTooltipContent = ({ 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("chart-tooltip-content", className)} 
    {...props} 
  />
);

const ChartLegend = ({ children }: { children?: React.ReactNode }) => (
  <div>{children}</div>
);

const ChartLegendContent = ({ 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("chart-legend-content", className)} 
    {...props} 
  />
);

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
};