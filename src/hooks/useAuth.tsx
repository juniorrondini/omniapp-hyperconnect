import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { authService } from "@/services/auth.service";
import { LoginCredentials, SignUpCredentials, User } from "@/types/auth";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      const response = await authService.login(credentials);
      if (response.user) {
        setUser(response.user);
        navigate("/");
        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo de volta!",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (credentials: SignUpCredentials) => {
    try {
      setIsLoading(true);
      const response = await authService.signUp(credentials);
      if (response.user) {
        setUser(response.user);
        navigate("/");
        toast({
          title: "Conta criada com sucesso",
          description: "Bem-vindo ao OmniLife!",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao criar conta",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      navigate("/auth");
      toast({
        title: "Logout realizado com sucesso",
        description: "Até logo!",
      });
    } catch (error) {
      toast({
        title: "Erro ao fazer logout",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    }
  };

  return {
    user,
    isLoading,
    login,
    signUp,
    logout,
  };
};