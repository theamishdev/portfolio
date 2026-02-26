# Deploying your Flask Portfolio for Free

You can deploy this project for free using several services. Here are the most popular options:

## Option 1: Render (Recommended)
Render is very easy to use and has a generous free tier.

1.  **Prepare your repository**:
    *   Push your code to a GitHub repository.
    *   Make sure `app.py`, `requirements.txt`, and the `client/dist` folder are in your repository.
2.  **Create a New Web Service**:
    *   Go to [Render](https://render.com/) and create a free account.
    *   Click **New +** and select **Web Service**.
    *   Connect your GitHub repository.
3.  **Configure the Service**:      
    *   **Runtime**: Python
    *   **Build Command**: `pip install -r requirements.txt`
    *   **Start Command**: `gunicorn app:app`
    *   **Important**: I have added `gunicorn` to your `requirements.txt`. This is the production server that Render uses to run your Flask app.
4.  **Deploy**: Render will automatically build and deploy your project when you push to GitHub.

## Option 2: Railway
Railway is another great alternative with a simple setup.

1.  Connect your GitHub repo to [Railway](https://railway.app/).
2.  It will automatically detect the Python environment.
3.  It will use your `requirements.txt` to install dependencies.
4.  Set the start command to `python app.py`.

## Option 3: PythonAnywhere
Good for simple Flask apps, but requires more manual setup.

1.  Create an account on [PythonAnywhere](https://www.pythonanywhere.com/).
2.  Upload your files.
3.  Set up a virtual environment and install dependencies.
4.  Configure the Web tab to point to your `app.py`.

### Important Notes:
- **Build Step**: Remember that Flask needs the `client/dist` folder. If you update your React code, run `npm run build` in the `client` folder before pushing to GitHub.
- **Port**: Flask usually runs on port 5000, but most free hosts expect you to use the `$PORT` environment variable or port 80/443. Render handles this automatically.
