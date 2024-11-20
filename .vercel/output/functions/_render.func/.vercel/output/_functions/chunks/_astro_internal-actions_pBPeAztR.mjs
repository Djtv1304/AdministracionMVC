import './_astro_actions_CN4tN0kk.mjs';
import 'neotraverse/modern';
import 'kleur/colors';
import './astro/server_CdaQEI4y.mjs';
import 'clsx';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { A as AstroError, h as ActionCalledFromServerError } from './astro/assets-service_CI-QSHFT.mjs';
import { i as isActionAPIContext } from './utils_Cwo9_uli.mjs';
import { c as callSafely, b as ActionError, d as ActionInputError } from './shared_B6Fhq9l9.mjs';

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function" || !isActionAPIContext(this)) {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapBaseObjectSchema(inputSchema, unparsedInput);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapBaseObjectSchema(schema, unparsedInput) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  if (schema instanceof z$1.ZodDiscriminatedUnion) {
    const typeKey = schema._def.discriminator;
    const typeValue = unparsedInput.get(typeKey);
    if (typeof typeValue !== "string") return schema;
    const objSchema = schema._def.optionsMap.get(typeValue);
    if (!objSchema) return schema;
    return objSchema;
  }
  return schema;
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const server = {
  newUser: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(3, {
        message: "Name must be at least 3 characters long"
      }).max(50, {
        message: "Name must be at most 50 characters long"
      }),
      lastname: z.string().min(3, {
        message: "Lastname must be at least 3 characters long"
      }).max(50, {
        message: "Lastname must be at most 50 characters long"
      }),
      birthdate: z.string().date(),
      email: z.string().email(),
      password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
      }),
      confirmPassword: z.string()
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    }),
    handler: async (newUser) => {
      try {
        const userPayload = {
          email: newUser.email,
          primerNombre: newUser.name,
          apellido: newUser.lastname,
          contrasenia: newUser.password,
          fechaNacimiento: new Date(newUser.birthdate).toISOString().split("T")[0]
          // Formato YYYY-MM-DD
        };
        const response = await fetch("https://cae3-157-100-138-126.ngrok-free.app/usuario/registrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userPayload)
        });
        if (!response.ok) {
          const errorData = await response.json();
          return { success: false, error: { fields: errorData.errors || "An error occurred" } };
        }
        const data = await response.text();
        console.log(data);
        return { success: true, data };
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          return { success: false, error: { fields: { general: error.message } } };
        } else {
          console.error("Unknown error", error);
          return { success: false, error: { fields: { general: "Unknown error" } } };
        }
      }
    }
  }),
  loginUser: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
      })
    }),
    handler: async (loginData) => {
      try {
        const loginPayload = {
          email: loginData.email,
          contrasenia: loginData.password
        };
        const response = await fetch("https://cae3-157-100-138-126.ngrok-free.app/usuario/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginPayload)
        });
        if (!response.ok) {
          return { success: false, error: { fields: { general: "Incorrect email or password" } } };
        }
        const text = await response.text();
        const data = text === "true";
        if (data) {
          return { success: true };
        } else {
          return { success: false, error: { fields: { general: "Incorrect email or password" } } };
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          return { success: false, error: { fields: { general: error.message } } };
        } else {
          console.error("Unknown error", error);
          return { success: false, error: { fields: { general: "Unknown error" } } };
        }
      }
    }
  })
};

export { server };
