import { defineFunction } from "@aws-amplify/backend"
import { Runtime } from "aws-cdk-lib/aws-lambda"
import { PythonFunction } from "@aws-cdk/aws-lambda-python-alpha"
import { Construct } from "constructs"

export const pythonFunction = // a python function
defineFunction((scope: Construct) => {
    return new PythonFunction(scope, "PythonFunction", {
      entry: '/path/to/my/function',
      runtime: Runtime.PYTHON_3_10,
    })
  })

  export const sayHelloPythonHandler = defineFunction({
    name: "say-hello-python",
    entry: "./",
    runtime: "PYTHON_3_10",
  });

export const myApiFunction = defineFunction({
  name: "api-function",
});

defineFunction({
    name: "my-regular-function",
  })
  
  // a go function
  defineFunction((scope) => {
    return new GoFunction(scope, "GoFunction", {
      entry: "app/cmd/api",
    })
  })