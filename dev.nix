
{ pkgs, ... }:

{
  # Which nixpkgs channel to use.
  channel = "unstable"; # or "23.05", "22.11", etc.

  # Configure the project environment.
  env = {
    # NODE_HOME = "${pkgs.nodejs}/bin/node";
  };

  # Packages to make available in the environment.
  packages = [
    pkgs.nodejs_20 # Specify Node.js version
    pkgs.nodePackages.pnpm
    pkgs.bash-interactive
    pkgs.docker # Add docker package
  ];

  # Scripts to run when the environment is activated.
  scripts = {
    # "my-script" = "echo 'Hello, world!'";
  };
}
