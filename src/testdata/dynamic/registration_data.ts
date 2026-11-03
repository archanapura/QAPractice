import { randomUUID } from "node:crypto";
type RegistrationData = {
  emailaddress: string;
  password: string;
  confirmPassword: string;
};
export function generateregistrationData(): RegistrationData {
    const randomUUID = crypto.randomUUID().replace(/-/g, "");
    //output will be:550e8400-e29b-41d4-a716-446655440000 [8-4-4-4-12]
  return {
    emailaddress: `user-${randomUUID.slice(0, 8)}@example.com`,
    password: "Bank@123_${randomUUID.slice(10, 14)}",
    confirmPassword: "Bank@123_${randomUUID.slice(10, 14)}",
  };
}