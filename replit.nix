{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.libuuid
        pkgs.python
        pkgs.ffmpeg
        pkgs.imagemagick  
        pkgs.wget      
    ];
    env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}
