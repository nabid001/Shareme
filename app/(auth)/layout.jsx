import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex justify-center items-center bg-red-400">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
