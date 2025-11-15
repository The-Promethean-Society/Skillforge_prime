{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Add the Docker package to the environment
  packages = [
    pkgs.docker
    # Include other necessary development tools here
    pkgs.nodejs-20_x
    pkgs.patch-package
  ];

  # Setup necessary environment variables or initialization commands
  shellHook = ''
    # This section can be used to start services or set variables.
    echo "Nix environment with Docker is ready."
  '';
}
