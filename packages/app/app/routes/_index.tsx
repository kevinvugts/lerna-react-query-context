import type { MetaFunction } from "@remix-run/node";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@kiwi/components";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const TestComponent = () => {
  const queryClient = useQueryClient();
  return (
    <div>
      <h1>Test Component</h1>
      <pre>{JSON.stringify(queryClient)}</pre>
      {/* 👉🏻 <Button /> Component out this line and it fails 🎉 */}
      {/* 
        ************************************************************************
        For some reason the QueryClientProvider defined in root.tsx isn't propagated to the @kiwi/components library component
        while the Button component is being used "within" this context provider. 

        The weird thing is that when you define a custom context in a separate lerna package (acting as a stand alone npm lib) with a Provider and a Consumer, 
        the Consumer is able to access the context from the @kiwi/components library.
         
        So it clearly is something that goes wrong within in @tanstack/react-query itself
        ************************************************************************
      */}
    </div>
  );
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Test React Query </h1>
      <TestComponent />
    </div>
  );
}
