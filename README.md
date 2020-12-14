# INST377-SP2021

This is the lab support repository for the Spring 2021 version of INST377. 

### Installation
* Once you have forked this repository to your own account using the Fork button in the top right of the Github page
* Clone this repository into Github Desktop using the large green Code button.
* Open it using the "open this repository in VSCode" button within Github Desktop.
* In VSCode, open a new terminal window by going to the Terminal option and selecting New Terminal.
* Type `npm install` in that window.
* You should be able to test your labs by typing `npx cypress open`

### Keeping Up To Date With The Course Repository
* You cannot publish your changes to the course repository.
* Instead, you will need to add a remote to your code base, and publish your work there.

#### In VSCode
In your terminal window, in your copy of this repository (folder):
* type `git remote -v` - this will list all the remote places you can save your code. It should list two repositories:
    * The course copy of this repo, called "upstream" - `upstream https://github.com/UMD-INST377/INST377-SP2021`
    * Your copy of this repo, called "origin" - `origin https://github.com/Your-Username/INST377-SP2021`

**To set your repository remote (where you publish code to) in GH Desktop**
* [Setting Your Remote On Github Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/changing-a-remotes-url-from-github-desktop)

### How It Should Look When You're Done
* `git remote -v` should output this:
```
upstream https://github.com/UMD-INST377/INST377-SP2021.git (fetch)
upstream https://github.com/UMD-INST377/INST377-SP2021.git (push)
origin https://github.com/your-username/INST377-SP2021.git (fetch)
origin https://github.com/your-username/INST377-SP2021.git (push)
```

##### How To Update Your Own Remote From The Main Lab Files
You will need to pull from the class repository periodically as we go through the semester, though hopefully not for the first few weeks.
To do this, in VSCode:
* Open a terminal window.
* Type `git pull upstream main`, and you should have any changes that have been made since your last pull.
* You should do this pretty much every time you get working with the labs.
* If it messes with you, which it may do, please join us for office hours and we'll work it out.
