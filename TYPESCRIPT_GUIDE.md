# TypeScript Quick Reference Guide

## Overview
This project is now fully TypeScript-enabled. All `.jsx` files have been converted to `.tsx` and all `.js` files to `.ts`.

## Path Aliases
Use these convenient import aliases throughout the codebase:

```typescript
import Component from '@/components/Component';      // src/components/Component.tsx
import Page from '@/pages/Page';                     // src/pages/Page.tsx
import { MyType } from '@/types';                    // src/types/index.ts
import useCustomHook from '@/hooks/useCustomHook';   // src/hooks/useCustomHook.ts

// Also available:
import Component from '@components/Component';
import Page from '@pages/Page';
import { MyType } from '@types';
import useHook from '@hooks/useHook';
```

## Type Definitions Location
All shared types are defined in `src/types/index.ts`:

```typescript
import { 
  Feature, 
  Benefit, 
  ServiceItem, 
  ServiceCategory,
  Stat,
  FeatureCard,
  ContactFormData,
  PageTemplateProps 
} from '@/types';
```

## Component Patterns

### Functional Component with Props
```typescript
import React from 'react';

interface MyComponentProps {
  title: string;
  count?: number;  // Optional prop
  onClick: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, count = 0, onClick }) => {
  return (
    <div onClick={onClick}>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
```

### Component with State
```typescript
import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  
  return (
    <div>
      <p>{count}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
```

### Form Handling
```typescript
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ContactFormData } from '@/types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Event Handlers
```typescript
// Mouse events
const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  console.log('Clicked!');
};

// Input events
const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  console.log(e.target.value);
};

// Form events
const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
};

// Image error handling
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
  const target = e.target as HTMLImageElement;
  target.src = '/fallback.jpg';
};
```

## Type Definitions

### Defining New Types
Add new types to `src/types/index.ts`:

```typescript
// Interface for object types
export interface MyData {
  id: number;
  name: string;
  optional?: boolean;
}

// Type alias for unions
export type Status = 'pending' | 'success' | 'error';

// Type for function
export type Callback = (value: string) => void;

// Generic type
export interface ApiResponse<T> {
  data: T;
  error?: string;
}
```

### Using Types
```typescript
import { MyData, Status, ApiResponse } from '@/types';

const data: MyData = {
  id: 1,
  name: 'Example'
};

const status: Status = 'success';

const response: ApiResponse<MyData> = {
  data: data
};
```

## Arrays and Objects

```typescript
// Array of objects
const items: Feature[] = [
  { icon: 'icon-1', title: 'Feature 1', description: 'Desc' },
  { icon: 'icon-2', title: 'Feature 2', description: 'Desc' }
];

// Object with specific shape
const config: { [key: string]: string } = {
  apiUrl: 'https://api.example.com',
  apiKey: 'key123'
};

// Array of primitives
const numbers: number[] = [1, 2, 3, 4];
const strings: string[] = ['a', 'b', 'c'];
```

## Custom Hooks

```typescript
import { useState, useEffect } from 'react';

const useCustomHook = (initialValue: string): [string, (value: string) => void] => {
  const [value, setValue] = useState<string>(initialValue);
  
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
  
  return [value, setValue];
};

export default useCustomHook;
```

## Common TypeScript Commands

```bash
# Check for type errors
npm run type-check

# Build (includes type checking)
npm run build

# Start dev server
npm run dev
```

## Troubleshooting

### Error: "Property does not exist on type"
Make sure you've defined the type correctly and imported it:
```typescript
import { MyType } from '@/types';

const obj: MyType = { /* ... */ };
```

### Error: "Cannot find module '@/types'"
Ensure `tsconfig.json` has the correct path mappings:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Error: "Type 'EventTarget' is missing properties"
Cast the event target to the correct type:
```typescript
const target = e.target as HTMLInputElement;
```

## Best Practices

1. **Always define types for props** - Use interfaces for component props
2. **Use type inference** - Let TypeScript infer simple types:
   ```typescript
   const count = 0; // TypeScript knows this is number
   ```
3. **Avoid `any`** - Use specific types or `unknown` instead
4. **Use optional properties** - Mark optional props with `?`:
   ```typescript
   interface Props {
     required: string;
     optional?: number;
   }
   ```
5. **Export types** - Make types reusable across components
6. **Use type guards** - Check types at runtime:
   ```typescript
   if (typeof value === 'string') {
     // TypeScript knows value is string here
   }
   ```

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
