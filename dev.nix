{ pkgs, ... }: {
  # https://nix.dev/reference/nix-project-templates#dev-nix
  # To add a new package to your environment, add it to the `packages` list below.
  # To see all available packages, run `nix search nixpkgs <search term>`.
  packages = [
    pkgs.nodejs_20 # For Next.js development
    pkgs.nodePackages.pnpm
    pkgs.docker # CRITICAL: Installs the Docker CLI and daemon
    pkgs.google-cloud-sdk # Useful for gCloud commands
  ];
}
