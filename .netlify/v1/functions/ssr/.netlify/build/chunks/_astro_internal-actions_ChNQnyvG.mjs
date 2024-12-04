import './_astro_actions_-geyxtwh.mjs';
import 'neotraverse/modern';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import './astro/server_CSWU1b9h.mjs';
import 'clsx';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { A as AstroError, p as ActionCalledFromServerError } from './astro/assets-service_DN06EriY.mjs';
import { i as isActionAPIContext } from './utils_Cwo9_uli.mjs';
import { c as callSafely, a as ActionError, b as ActionInputError } from './shared_DXaPG7ad.mjs';

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

const newUser = defineAction({
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
  handler: async (newUser2) => {
    try {
      const userPayload = {
        email: newUser2.email,
        primerNombre: newUser2.name,
        apellido: newUser2.lastname,
        contrasenia: newUser2.password,
        fechaNacimiento: new Date(newUser2.birthdate).toISOString().split("T")[0]
        // Formato YYYY-MM-DD
      };
      const response = await fetch(
        "https://coreweb-springboot-backend.onrender.com/usuario/registrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userPayload)
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return {
          success: false,
          error: { fields: errorData.errors || "An error occurred" }
        };
      }
      const data = await response.text();
      return { success: true, data };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return {
          success: false,
          error: { fields: { general: error.message } }
        };
      } else {
        console.error("Unknown error", error);
        return {
          success: false,
          error: { fields: { general: "Unknown error" } }
        };
      }
    }
  }
});

const loginUser = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long"
    })
  }),
  handler: async (loginData, { cookies }) => {
    try {
      const loginPayload = {
        email: loginData.email,
        contrasenia: loginData.password
      };
      const response = await fetch(
        "https://coreweb-springboot-backend.onrender.com/usuario/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginPayload)
        }
      );
      if (!response.ok) {
        console.log("ERROR: ", response);
        return {
          success: false,
          error: { fields: { general: "Incorrect email or password" } }
        };
      }
      const token = await response.text();
      cookies.set("jwtToken", token, {
        httpOnly: false,
        secure: false,
        // Ajustado para pruebas en ambiente de desarrollo
        maxAge: 60 * 60 * 10,
        // 10 horas
        path: "/",
        sameSite: "lax",
        encode: String,
        // Serializa el valor como una cadena de texto
        domain: void 0,
        // Referencia al dominio actual sin especificar una cadena de texto
        expires: new Date(Date.now() + 60 * 60 * 10 * 1e3)
        // 10 horas
      });
      return { success: true };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return {
          success: false,
          error: { fields: { general: error.message } }
        };
      } else {
        console.error("Unknown error", error);
        return {
          success: false,
          error: { fields: { general: "Unknown error" } }
        };
      }
    }
  }
});

const newVehicle = defineAction({
  // Definir el tipo de datos que acepta la acción, en este caso, formularios
  accept: "form",
  // Definir el esquema de validación de los datos
  input: z.object({
    make: z.string().min(3, {
      message: "Brand must be at least 3 characters long"
    }),
    model: z.string().min(1, {
      message: "Model must be at least 1 characters long"
    }),
    year: z.number().int().min(1900, {
      message: "Year must be at least 1900"
    }).max(2030, {
      message: "Year must be at most 2030"
    }),
    batteryCapacity: z.number().min(1, {
      message: "Battery capacity must be at least 1"
    }),
    energyConsumption: z.number(),
    classification: z.enum(["SUV", "Sedan", "Truck", "Coupe", "Convertible"]),
    color: z.string().min(3, {
      message: "Color must be at least 3 characters long"
    }),
    autonomy: z.number().int().min(50, {
      message: "Autonomy must be at least 50 km"
    }),
    chargeTime: z.string().regex(/^\d{1,2}:\d{2}$/, {
      message: "Charge time must be in the format H:MM or HH:MM"
    }),
    maintenanceCost: z.number().min(1, {
      message: "Maintenance cost must be at least 1"
    }),
    imageURL: z.string().url(),
    precio: z.number().int().min(1, {
      message: "Price must be at least 1"
    })
  }),
  // Definir el manejador de la acción
  handler: async (newVehicle2, { cookies }) => {
    try {
      const newVehiclePayload = {
        marca: newVehicle2.make,
        modelo: newVehicle2.model,
        anio: newVehicle2.year.toString(),
        capacidadBateria: newVehicle2.batteryCapacity,
        idUsuario: null,
        clasificacion: newVehicle2.classification,
        color: newVehicle2.color,
        autonomia: newVehicle2.autonomy.toString(),
        consumoEnergetico: newVehicle2.energyConsumption,
        tiempoCarga: newVehicle2.chargeTime,
        costoMantenimiento: newVehicle2.maintenanceCost,
        imageURL: newVehicle2.imageURL,
        promedioRendimiento: 0,
        precio: newVehicle2.precio
      };
      const jwtToken = cookies.get("jwtToken");
      if (!jwtToken) {
        return {
          success: false,
          error: { fields: { general: "Authentication token is missing" } }
        };
      }
      const response = await fetch("https://coreweb-springboot-backend.onrender.com/vehiculo/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken.value.trim()}`
        },
        body: JSON.stringify(newVehiclePayload)
      });
      if (!response.ok) {
        return {
          success: false,
          error: { fields: { general: "Error registering the vehicle" } }
        };
      }
      const data = await response.text();
      return { success: true, data };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return {
          success: false,
          error: { fields: { general: error.message } }
        };
      } else {
        console.error("Unknown error", error);
        return {
          success: false,
          error: { fields: { general: "Unknown error" } }
        };
      }
    }
  }
});

const newCombustionVehicle = defineAction({
  accept: "form",
  input: z.object({
    marca: z.string().min(3, {
      message: "Brand must be at least 3 characters long"
    }),
    modelo: z.string().min(1, {
      message: "Model must be at least 1 character long"
    }),
    anio: z.string().regex(/^\d{4}$/, {
      message: "Year must be a 4-digit number"
    }),
    clasificacion: z.enum(["SUV", "Sedan", "Truck", "Coupe", "Convertible"]),
    color: z.string().min(3, {
      message: "Color must be at least 3 characters long"
    }),
    consumoCombustible: z.number().min(0, {
      message: "Fuel consumption must be a positive number"
    }),
    emisionesCO2: z.number().min(0, {
      message: "CO2 emissions must be a positive number"
    }),
    costoCombustible: z.number().min(0, {
      message: "Fuel cost must be a positive number"
    }),
    capacidadTanque: z.number().min(0, {
      message: "Tank capacity must be a positive number"
    }),
    imageURL: z.string().url({ message: "Image URL must be a valid URL" })
  }),
  handler: async (newVehicle, { cookies }) => {
    try {
      const jwtToken = cookies.get("jwtToken");
      if (!jwtToken) {
        return {
          success: false,
          error: { fields: { general: "Authentication token is missing" } }
        };
      }
      const response = await fetch(
        "https://coreweb-springboot-backend.onrender.com/vehiculoCombustion/registrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken.value.trim()}`
          },
          body: JSON.stringify(newVehicle)
        }
      );
      if (!response.ok) {
        const errorData = await response.text();
        return {
          success: false,
          error: { fields: errorData || "An error occurred" }
        };
      }
      const data = await response.text();
      return { success: true, data };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return {
          success: false,
          error: { fields: { general: error.message } }
        };
      } else {
        console.error("Unknown error", error);
        return {
          success: false,
          error: { fields: { general: "Unknown error" } }
        };
      }
    }
  }
});

const userRoutine = defineAction({
  accept: "form",
  input: z.object({
    fechaRutina: z.string().date().refine((date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    }).transform((date) => {
      return new Date(date).toISOString().split("T")[0];
    }),
    diaSemana: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
    actividad: z.string().min(3, {
      message: "Activity must be at least 3 characters long"
    }),
    kilometrajeRecorrido: z.string().regex(/^\d+(\.\d+)?$/, {
      message: "Kilometraje must be a valid number"
    })
  }),
  handler: async (routineData, { cookies }) => {
    try {
      const token = cookies.get("jwtToken");
      if (!token) {
        return {
          success: false,
          error: { fields: { general: "You must be logged in" } }
        };
      }
      const response = await fetch("https://coreweb-springboot-backend.onrender.com/rutinaUsuario/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token?.value.trim()}`
        },
        body: JSON.stringify(routineData)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        return {
          success: false,
          error: { fields: { general: errorMessage } }
        };
      }
      const data = await response.text();
      return { success: true, data };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return {
          success: false,
          error: { fields: { general: error.message } }
        };
      } else {
        console.error("Unknown error", error);
        return {
          success: false,
          error: { fields: { general: "Unknown error" } }
        };
      }
    }
  }
});

const server = {
  newUser,
  loginUser,
  newVehicle,
  newCombustionVehicle,
  userRoutine
};

export { server };
