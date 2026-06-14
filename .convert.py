import subprocess, os

ffmpeg = r"D:\Documents\作品集网站\.pylib\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"

src = r"D:\CloudMusic\Hans Zimmer,Benjamin Wallfisch - Tears In The Rain.m4a"
out = r"D:\Documents\作品集网站\public\music\bg.mp3"
os.makedirs(r"D:\Documents\作品集网站\public\music", exist_ok=True)

# Try with explicit stream mapping
cmd = [ffmpeg, "-i", src, "-vn", "-acodec", "mp3", "-b:a", "192k", "-y", out]
result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode != 0:
    print("Failed. Retrying with different params...")
    cmd = [ffmpeg, "-i", src, "-vn", "-f", "mp3", "-y", out]
    result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print(f"OK! {os.path.getsize(out)//1024} KB")
else:
    # Try copy to see if input file can be read at all
    test = r"D:\Documents\作品集网站\public\music\test.m4a"
    result2 = subprocess.run([ffmpeg, "-i", src, "-c", "copy", "-y", test], capture_output=True, text=True)
    if result2.returncode == 0:
        print(f"Copy works: {os.path.getsize(test)//1024} KB")
    else:
        err = result2.stderr
        for l in err.split("\n"):
            if "error" in l.lower() or "Error" in l:
                print(l.strip())
