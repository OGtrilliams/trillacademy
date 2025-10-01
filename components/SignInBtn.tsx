import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function SignInBtn() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
