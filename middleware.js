import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/authentication/signin", // redirect if unauthenticated
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // protect all /dashboard routes
};
