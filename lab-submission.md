# Instructions for Submitting a Lab Assignment to QuickFeed

- [Instructions for Submitting a Lab Assignment to QuickFeed](#instructions-for-submitting-a-lab-assignment-to-quickfeed)
  - [Introduction](#introduction)
  - [Tracking Your Time](#tracking-your-time)
    - [Getting Started](#getting-started)
    - [Example Entries](#example-entries)
    - [Committing Your Hours and When to Update](#committing-your-hours-and-when-to-update)
    - [Git Hook for Reminders (Optional)](#git-hook-for-reminders-optional)
  - [Final Submission and Resubmission of LabX](#final-submission-and-resubmission-of-labx)
  - [Updating Local Working Copy with Changes from Web Interface](#updating-local-working-copy-with-changes-from-web-interface)
  - [Working with Group Assignments](#working-with-group-assignments)
  - [Updating Local Working Copy with Changes from Other Group Members](#updating-local-working-copy-with-changes-from-other-group-members)
  - [Handling Conflicts from Course Assignment Updates](#handling-conflicts-from-course-assignment-updates)

## Introduction

This section give step-by-step instructions on how to submit assignments.
In the following, you are expected to run commands from a terminal environment.

- On macOS, Terminal can be started via Spotlight, by typing the first few letters of `terminal`.
- On Ubuntu Linux, you can click on the Activities item at the top left of the screen, then type the first few letters of `terminal`.
- On Windows, follow these [instructions](setup-wsl.md) to install the Windows Subsystem for Linux, if you haven't done so already.

1. Initially, you will get access to two repositories when you have signed up on QuickFeed.

   The first is the [`assignments`](https://github.com/dat520-2026/assignments) repository, which is where we publish all lab assignments, skeleton code and additional information.
   You only have read access to this repository, and its content may change throughout the semester, as we add new assignments or fix problems.

   The second is your own private repository named `username-labs`, which is a fork of the `assignments` repository.
   You will have write access to this repository.
   Your solution to the assignments should be pushed here.
   QuickFeed automatically synchronizes updates from the `assignments` repository to your `username-labs` repository, unless there are conflicts.
   Conflicts are rare, but if they occur, QuickFeed will create a pull request on your repository for you to resolve them.

2. First, you will need to set up GitHub authentication.

   Alternative 1:
   Install the [GitHub command-line tool](https://cli.github.com).

   On macOS or Linux, you can install it using [Homebrew](https://brew.sh/):

   ```console
   brew install gh
   ```

   On Ubuntu Linux, you can install it using [Snap](https://snapcraft.io/):

   ```console
   sudo snap install gh
   ```

   On Windows, you can install it using [Chocolatey](https://chocolatey.org/):

   ```console
   choco install gh
   ```

   Then, you can authenticate using:

   ```console
   gh auth login
   ```

   Follow the instructions to authenticate using your GitHub account.

   Alternative 2:
   Set up SSH keys for GitHub authentication by following the instructions in the [GitHub documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

3. To get started, decide on a suitable location for your workspace for the course.
   In this guide we will use `$HOME/dat520-2026` as the workspace.
   Do the following making sure to replace `username` with your GitHub user name:

   ```console
   mkdir $HOME/dat520-2026
   cd $HOME/dat520-2026
   ```

   Alternative 1 (using the `gh` tool):

   ```console
   gh repo clone dat520-2026/username-labs assignments
   ```

   Alternative 2 (using `git` directly; assuming you have set up your GitHub user with SSH keys):

   ```console
   git clone git@github.com:dat520-2026/username-labs assignments
   ```

4. Your repository is already set up with the latest assignments from the course.
   QuickFeed handles synchronization automatically, so you don't need to manually pull updates.

5. One of the most useful git commands is: `git status`.
   This will most often be able to tell you what you should be doing with your working copy.

6. When working with `git` you typically iterate between the following steps:

   1. Edit files
   2. `git status` (check to see which files have changed)
   3. `git add <edited files>` (only add source files, not binaries)
   4. `git status` (check that all intended files have been added to the staging area)
   5. `git commit`
   6. `git status` (check that changes have been committed)

7. You may iterate over the steps above many times.
   But eventually, you will want to push your changes to GitHub with the following command:

   ```console
   git push
   ```

   Note that this will only push your committed changes!

8. In summary, these are the typical steps that are necessary to make changes to files, add those changes to staging, commit changes and push changes to your own private repository on GitHub:

   ```console
   cd $HOME/dat520-2026/assignments/lab1
   vim shell_questions.md
   # make your edits and save
   git add shell_questions.md
   git commit
   # This will open an editor for you to write a commit message
   # See policy.md for instructions on how to construct commit messages
   git push
   ```

9. When you have pushed a change to GitHub, QuickFeed's built-in Continuous Integration system will pick up your code and run a set of tests against your code.

   Note that QuickFeed will only run tests against your `main` branch.
   If you do not want QuickFeed to test your code, you can create a separate branch, e.g. `featureX`, and work on that branch until you are finished.

   When you are ready to submit, simply merge the `featureX` branch into `main` and commit and push.
   QuickFeed will then pick up your code and run our tests on your code.

10. You can check the output by going to the [QuickFeed web interface](http://uis.itest.run/).
    The results (scores and build log) should be available under the assignment's menu item.

11. If some of the QuickFeed tests fail, you may make changes to your code/answers as many times as you like up until the deadline.
    Changes after the deadline will count against the slip days.

## Tracking Your Time

To help us improve the course, we ask you to track the time you spend on each lab.
This data helps us calibrate workload expectations and improve future iterations of the course.

**This is a requirement.** Your `hours.csv` file will be checked during lab approval.
We kindly ask that you report your hours honestly—accurate data is essential for making meaningful improvements to the course.

### Getting Started

Your repository already includes an `hours.csv` file with the header row and an example entry.
Replace the example entry with your own data, and add a new row for each work session.

The CSV file has the following columns:

| Column     | Required | Format        | Description                                                  |
| ---------- | -------- | ------------- | ------------------------------------------------------------ |
| `lab`      | Yes      | `lab1`-`lab8` | Lab identifier matching folder names                         |
| `student`  | Yes      | Text          | Your name (use consistent spelling)                          |
| `date`     | Yes      | `YYYY-MM-DD`  | Date of work session                                         |
| `hours`    | Yes      | Decimal       | Hours spent (e.g., `1.5`, `2.0`)                             |
| `category` | Yes      | Enum          | One of: `reading`, `coding`, `debugging`, `testing`, `other` |
| `notes`    | Yes      | Text          | Description of work done                                     |

**Important:** Use a dot (`.`) as the decimal separator for hours, not a comma (`,`).
For example, write `2.5` for two and a half hours, not `2,5`.

### Example Entries

```csv
lab,student,date,hours,category,notes
lab1,Alice,2026-01-15,2.5,reading,"Read UDP documentation"
lab1,Alice,2026-01-16,3.0,coding,"Implemented echo server"
lab1,Bob,2026-01-15,1.5,reading,"Studied Go networking"
lab1,Bob,2026-01-17,4.0,debugging,"Fixed UDP client issues"
```

### Committing Your Hours and When to Update

Commit and push your `hours.csv` file along with your lab submissions.
For group assignments, all group members should add their entries to the same `hours.csv` file in the group repository.

We recommend updating `hours.csv` at the end of each work session while the time is fresh in your memory.
Here are some tips to help you remember:

- **Set a reminder**: Use a phone alarm or calendar event for when you typically finish working.
- **Make it a habit**: Add "update hours.csv" to your mental checklist before closing your laptop.
- **Use a sticky note**: Place a physical or digital note near your workspace.
- **End-of-session ritual**: Make updating your hours part of your "wrapping up" routine, like saving files and committing code.
- **Git hook**: Create a pre-commit hook that reminds you (see below).

### Git Hook for Reminders (Optional)

You can set up a Git pre-commit hook that reminds you to update `hours.csv` before each commit.
To install it, run the following commands from your repository root:

```sh
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
# Reminder to update hours.csv before committing

# Check if hours.csv was modified in this commit
if ! git diff --cached --name-only | grep -q "^hours.csv$"; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║  REMINDER: Did you update hours.csv for this session?      ║"
    echo "║  If yes, run: git add hours.csv                            ║"
    echo "║  Then commit again.                                        ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "To proceed without updating hours.csv, use: git commit --no-verify"
    echo ""
    exit 1
fi
EOF
chmod +x .git/hooks/pre-commit
```

This hook will block commits that don't include changes to `hours.csv` and remind you to update it.
If you need to commit without updating hours (e.g., for a quick fix), you can bypass the hook with:

```sh
git commit --no-verify
```

## Final Submission and Resubmission of LabX

1. When you are finished with all the tasks for some `labX`, and you wish to submit, you may issue a commit message as follows to indicate that you are done:

   ```console
   git commit -m "qf(labX): final submission"
   ```

   The above text should be on the first line of the commit message, where `X` is the lab number.
   If you have no changes to commit, then you can use:

   ```console
   git commit --allow-empty -m "qf(labX): final submission"
   ```

   If there are any issues you want us to pay attention to, please add those comments after an empty line in the commit message.

   If you later find a mistake and want to resubmit, please use `labX resubmission` as the commit message.

   ```console
   git commit -m "qf(labX): resubmission"
   ```

   Notes:

   - These commit messages are not used by QuickFeed, they are only used to identify your lab submission commit when we do manual review.
   - Your slip days usage is calculated based on the deadline of `labX` and the time when you pushed the last commit to GitHub, that touched any of the files in the `labX` folder.

2. Push your changes to GitHub using:

   ```console
   git push
   ```

   After a while, you should be able to view your results in the QuickFeed web interface as described earlier.

## Updating Local Working Copy with Changes from Web Interface

1. If you make changes to your own `username-labs` repository using the GitHub web interface, and you want to pull or fetch those changes to your local computer's working copy, you can run the following command:

   ```console
   git pull
   ```

   Or if you prefer rebasing:

   ```console
   git fetch
   git rebase
   ```

2. If there are conflicting changes, you will need to edit the files with conflicts.
   Normally, the conflicts are relatively straight forward to fix by picking one of the two changes:
   (i) your local change, or (2) the web interface (remote) change.
   Sometimes you need to merge the two changes, if both are relevant for your code.
   Remember to remove the lines that start with `>>>>`, `====`, and `<<<<<`.

   Tools like VSCode has built-in support for helping to resolve merge conflicts.

3. Next, you will need to commit the merge:

   ```console
   git commit
   ```

   This will open an editor for you to write a commit message.
   However, usually you can just use the default commit message that is provided if it is a merge commit.

## Working with Group Assignments

Note: Students that wish to work alone do not need to form a group, and can continue to push their solutions to group assignments to their own `username-labs` repository.

To work on group assignments, you need to clone your group's repository to your own machine.
In the instructions below, replace `groupname` with your group's repository name.
We assume you have already created the `dat520-2026` directory on your machine.

```console
cd $HOME/dat520-2026
git clone git@github.com:dat520-2026/groupname.git
```

All group members will have write access to the `groupname` repository, and it is this repository that your solutions should be pushed to.
QuickFeed will run our tests against your `groupname` repository and handle synchronization automatically.

## Updating Local Working Copy with Changes from Other Group Members

1. If another group member has made changes that has been pushed to GitHub, and you want to pull or fetch those changes to your local computer's working copy, you can run the following commands:

   ```console
   git pull
   ```

   Or if you prefer rebasing:

   ```console
   git fetch
   git rebase
   ```

2. If there are conflicting changes, you will need to edit the files with conflicts.
   Normally, the conflicts are relatively straight forward to fix by picking one of the two changes:
   (i) your local change, or (2) your group partner's (remote) change.
   Sometimes you need to merge the two changes, if both are relevant for your code.
   Remember to remove the lines that start with `>>>>`, `====`, and `<<<<<`.

   Tools like VSCode has built-in support for helping to resolve merge conflicts.

3. Next, you will need to commit the merge:

   ```console
   git commit
   ```

   This will open an editor for you to write a commit message.
   However, usually you can just use the default commit message that is provided if it is a merge commit.

## Handling Conflicts from Course Assignment Updates

QuickFeed automatically synchronizes updates from the `assignments` repository to your `username-labs` or group repository.
Conflicts are rare, but if they occur (e.g., if you have modified the same files that were updated in the assignments), QuickFeed will create a pull request on your repository.
You will receive a notification about this pull request.

To resolve the conflict:

1. Go to the pull request on GitHub (it will be titled something like "Merge updates from assignments").
2. Review the conflicting files.
3. Resolve the conflicts by editing the files directly on GitHub or by merging the pull request locally.
4. Once resolved, merge the pull request.

If you prefer to resolve locally:

1. Pull the pull request branch to your local repository.
2. Resolve conflicts using your preferred merge tool (e.g., VSCode).
3. Commit and push the resolved changes.
4. Merge the pull request on GitHub.
