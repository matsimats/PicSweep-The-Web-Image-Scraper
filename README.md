PicSweep: The Web Image Scraper is a Flask-based application that lets you scrape images from websites and download them as a ZIP file. This tool aims to simplify the process of collecting visual content from the web for various purposes, such as data analysis, research, or personal use. With just the URL of the webpage, PicSweep gets you the images in an organized and compressed format.

Features:
Easy to Use: A straightforward API requiring just a URL to start downloading images.
Built-in Compression: Images are stored as a ZIP file, making it easy to download multiple images at once.
Robust Scraping: Utilizes BeautifulSoup to scrape images, ensuring a high rate of success.
Lightweight: Built using Flask, making it fast and efficient.
Cross-Origin Resource Sharing (CORS) enabled: Can be easily integrated into front-end applications.
Installation & Usage:
To get started, all you need to do is clone this repository, install the requirements, and run the Flask application.

bash
Copy code
git clone <repository_url>
pip install -r requirements.txt
python app.py
Save to grepper
This will start the Flask server, and you can then use the /image-details and /download-images routes to interact with the application. Pass the website URL to /image-details to get the count and list of images, and use /download-images to download the ZIP file containing the images.

Limitations:
The ZIP file size is limited to 250 MB to ensure server stability.
This project is intended for educational and research purposes. Please make sure you have permission to scrape and download content from any website you interact with using this tool."

Feel free to customize the description according to the specific features or limitations of your application!
