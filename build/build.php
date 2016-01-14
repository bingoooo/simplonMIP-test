<?php

class Build {
	private $files = [];
	private $dir;
	private $dist;
	public function __construct(){
		$this->dir = __DIR__.'/../';
		$this->dist = $this->dir . 'dist/';
		echo 'coucou world';
		$this->initDist();
		$this->renameIndex();
		$this->listFiles();
		$this->moveAssets();
	}
	public function initDist(){
		if (file_exists($this->dist)){
			$this->recurseRmdir($this->dist);
		}
		mkdir($this->dist);
	}
	public function moveAssets(){
		$this->recurseCopy($this->dir.'public/css', $this->dist.'css');
		$this->recurseCopy($this->dir.'public/js', $this->dist.'js');
		$this->recurseCopy($this->dir.'public/img', $this->dist.'img');
		rename($this->dist.'accueil.html', $this->dist.'index.html');
	}
	public function renameIndex(){
		copy($this->dir.'public/index.html', $this->dir.'index.php');
	}
	public function listFiles(){
		$this->files = glob($this->dir.'public/partials/*.html');
		foreach ($this->files as $key => $value) {
			$this->mergeFile(file_get_contents($value), basename($value));
		}
	}
	public function mergeFile($page, $fn){
		ob_start();
		$content = $page;
		include $this->dir.'index.php';
		$out = ob_get_contents();
		ob_end_clean();
		file_put_contents($this->dist.$fn, $out);
	}
	public function recurseRmdir($dir) {
		$files = array_diff(scandir($dir), array('.','..'));
		foreach ($files as $file) {
			(is_dir("$dir/$file")) ? $this->recurseRmdir("$dir/$file") : unlink("$dir/$file");
		}
		return rmdir($dir);
	}
	function recurseCopy($src,$dst) { 
		$dir = opendir($src); 
		@mkdir($dst); 
		while(false !== ( $file = readdir($dir)) ) { 
			if (( $file != '.' ) && ( $file != '..' )) { 
				if ( is_dir($src . '/' . $file) ) { 
					$this->recurseCopy($src . '/' . $file,$dst . '/' . $file); 
				} 
				else { 
					copy($src . '/' . $file,$dst . '/' . $file); 
				} 
			} 
		} 
		closedir($dir); 
	} 
}

new Build();
