import PrimaryButton from "../Buttons/PrimaryButton";

export default function PreviewCard() {
  return (
    <div className="flex items-center justify-between p-4 bg-footer-gradient w-full col-span-2">
      <div className="flex flex-col">
        <h2 className="font-semibold text-white">Preview of Spotify</h2>
        <p className="text-white">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <div>
        <PrimaryButton>Sign up free</PrimaryButton>
      </div>
    </div>
  );
}
