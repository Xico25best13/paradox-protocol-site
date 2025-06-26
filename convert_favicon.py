from PIL import Image

img = Image.open("src/assets/logo_pyramid_transparent.png")
img.save("public/favicon.ico", sizes=[(16,16), (32,32), (48,48)])

