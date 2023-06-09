# Daily-planner

## Giving people a personal daily planner
  This is an application to help schedule you daily events through a normal work day which is 9am to 5pm but you could also add the rest of the day and have a more broad planner. The planner will let you enter your plan in a hour time block text field. The time block will appear grey if the time period has passed, red if you are on the current time block, and green for a future time block to be scheduled. The current time and date are listed at the top of the page for reference as well. All of your plans will be saved to the local storage of the page so even leaving and returning your plans will still be there.   
        
## Installation

I used Visual Studio Code (VScode) as my code editor it's easy to use and have many extensions to make your coding experience go smoother, but of course use any code editor you are comfortable with you can access and download the program for Windows or Mac at the following link: https://code.visualstudio.com/download

I used GitBash as my Command line program which can also be accessed through an extension that VScode offers also available for Windows or Mac you can download GitBash at https://git-scm.com/downloads 

I used a GitHub.com as my main repository database in order to save and re-edit this page and to allow public access for future editing by others.
## GitHub repository, GitBash, and VScode steps 

- Go to GitHub.com

- Find the repository you intend on reviewing or editing and click on it

- Click on the green <> Code button ![Screenshot github code button](https://user-images.githubusercontent.com/124540000/229514443-755e8baf-cafc-4762-af1c-646a80a3c252.png) to open dropbox containing your HTTPS link. 

- Copy the HTTPS link

- Open your command prompt for me it's GitBash

- Type cd Documents/ to enter your PC's documents folder

- Type git clone (paste the HTTPS link you copied from step 4) press the enter key you should get something that looks like this: ![Screenshot gitbash clone](https://user-images.githubusercontent.com/124540000/229516874-f639bc0d-6096-40a2-947d-8223401eabe9.png)

- If you saw the above command line sequence then the repository should be saved to your documents folder

- Open VScode or whichever code editor you use/prefer 

- Go to your file menu, then to open folder, find the repository folder you just cloned into you documents folder, and select the folder click select folder. That should open the file up in VScode and you can begin reviwing and/or editing the project.

- Once you have made changes go back to GitBash type 'git status' to make sure you're in the correct branch you want to save to

- Once you have confirmed you are in the correct branch type 'git add -A' to add you branch for staging

- Once your branch is staged type 'git status' which will lead to command lines saying: ![Screenshot git add](https://user-images.githubusercontent.com/124540000/229523067-9166abd1-b1ef-421b-b654-8842aee93e01.png)

- Type 'git commit -m "message describing you commit changes" should prompt command lines to this: ![Screenshot git commit](https://user-images.githubusercontent.com/124540000/229523985-70a7fd6e-5120-4d70-a00b-ec5f3b259da8.png)

- Next to make sure our branches are synced we need to type 'git pull origin main' which should look like this: ![Screenshot git pull](https://user-images.githubusercontent.com/124540000/229524832-36e7edd8-6ab6-47f6-b9a9-6d1f4742ab0b.png)

- If our branches are up to date we procede to merging them into our main branch by typing 'git push' just to push all or 'git push origin feature/' command to select a certain branch: ![Screenshot push all](https://user-images.githubusercontent.com/124540000/229528348-ad6663c1-3d36-4fa8-9e58-db3217cbbdb2.png) or ![Screenshot git push feature](https://user-images.githubusercontent.com/124540000/229528688-5e40d5fb-fe47-4537-bfa7-3a824ef3c1be.png)

With these steps you should now be able to clone a repository, edit the contents, and save your changes to others can see and even edit your changes. 

## Screenshots of the webpage