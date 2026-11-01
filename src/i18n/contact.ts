export const CONTACT_EMAIL = "ikizen.agency@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61578920502554";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ikizen-agency-615244377/?originalSubdomain=cu";

export function whatsappUrl(message: string) {
  return `https://wa.me/5355002026?text=${encodeURIComponent(message)}`;
}
