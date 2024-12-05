# Notes

## Next 15 / React 18 + App Router

[Can Next.js 15 App Router be used with React 18?](https://www.wisp.blog/blog/can-nextjs-15-app-router-be-used-with-react-18)

## LoginLink / RegisteLink components

For the LoginLink and RegisterLink components, it's best to import them from @kinde-oss/kinde-auth-nextjs/components to avoid this error. We left them in @kinde-oss/kinde-auth-nextjs and @kinde-oss/kinde-auth-nextjs/server for backwards compatibility.

- When importing from @kinde-oss/kinde-auth-nextjs you will need to be in a client component
- When importing from @kinde-oss/kinde-auth-nextjs/server you will need to be in a server component
- Importing the Links from @kinde-oss/kinde-auth-nextjs/components can be done in both client and server

## Kinde x supabase

[Kinde X supabase](https://kinde.com/blog/engineering/kinde-with-supabase/)

## Popover + modal issue

[Shadcn popover not working in Modal Dialog](https://github.com/shadcn-ui/ui/issues/1511)

## React Query

[Mastering Mutations in React Query](https://tkdodo.eu/blog/mastering-mutations-in-react-query)
