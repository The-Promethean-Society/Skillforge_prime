{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.patch-package
    pkgs.docker
  ];
  env = {
    # Environment variables can be set here
  };
}
