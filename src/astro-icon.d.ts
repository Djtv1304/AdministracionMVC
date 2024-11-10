declare module 'astro-icon/components' {
    import { ComponentType } from 'react';
  
    export const Icon: ComponentType<{ name: string; class?: string }>;
}