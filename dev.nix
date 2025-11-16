{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Add the Docker package to the environment
  packages = [
    pkgs.docker
    # Include other necessary development tools here
    pkgs.nodejs-18_x
    pkgs.protobuf
    pkgs.go
    pkgs.python3
    pkgs.python3Packages.grpcio-tools
    pkgs.protoc-gen-go
    pkgs.protoc-gen-go-grpc
  ];

  # Setup necessary environment variables or initialization commands
  shellHook = ''
    # This section can be used to start services or set variables.
    echo "Nix environment with Docker, Go, and Python is ready."
  '';
}
