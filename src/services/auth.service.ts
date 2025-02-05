import { AuthResponse, LoginCredentials, SignUpCredentials } from "@/types/auth";

// Placeholder service that will be implemented with Supabase
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    console.log("Login service to be implemented", credentials);
    throw new Error("Not implemented");
  },

  signUp: async (credentials: SignUpCredentials): Promise<AuthResponse> => {
    console.log("SignUp service to be implemented", credentials);
    throw new Error("Not implemented");
  },

  logout: async (): Promise<void> => {
    console.log("Logout service to be implemented");
    throw new Error("Not implemented");
  },

  getCurrentUser: async () => {
    console.log("GetCurrentUser service to be implemented");
    throw new Error("Not implemented");
  }
};