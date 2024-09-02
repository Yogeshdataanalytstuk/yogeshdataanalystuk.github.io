from PIL import Image
import os

# Directory containing images
image_folder = '/Users/yogeshthangamuthu/Desktop/project/CvLibraryprojects/llama/Depth-Anything-V2/depth_vis1'

# Output GIF path
gif_path = os.path.join(image_folder, 'output.gif')

# Get all image file paths
images = [os.path.join(image_folder, file) for file in os.listdir(image_folder) if file.endswith(('.png', '.jpg'))]
images.sort()  # Optional: sort the file names if required

# Open images
frames = [Image.open(image) for image in images]

# Save the images as a GIF
frames[0].save(gif_path, format='GIF', append_images=frames[1:], save_all=True, duration=500, loop=0)
