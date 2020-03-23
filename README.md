# 8 Hours Productivity App

The aim of the app is to provide a quick and easy way of keeping track of how much time you spend working and what projects you've been working on.

It incorporates a pomodoro timer (with customizable intervals), a task list of tasks you need to do, and a projects tab that allows you to declare projects/categories that you can track and reference later.

The current headache I'm having is the database design

There's a master list of users but I'm not sure how efficient it is to create a new table for each user's activity.

## Task List

The task list screen features a list view allowing you to view all tasks. You can further organise tasks using categories, with unsorted tasks being shown together underneath the unsorted heading.

When adding tasks you're able to select a category from a drop down menu or add another category using a pop-up dialog.

There's also a detail view where you can set attributes like duration, and priority (High, Med, Low) as well as schedule a time for completion which will generate reminders. In this section you'll find the ability to add or define sub-tasks, at which point the current task will become a <em>project</em>. This will allow you to group together all the time spent on this project.

Under each task there's a complete task button which will take you to the timer screen where you can adjust timer settings before focusing on the task.

## Timer

The timer can be used on its own without incorporating a task from the task list and allows you to set a work time and a rest time.

You can exit the timer using the "task completed" or "task abandoned" buttons and this will log the amount of time you've spent on the task so far and remove it from your task list if necessary.

## Dashboard

The dashboard allows you to visualise and review how your time is spent.

You can view total time spent per category or project, as well as viewing work time over a given period (days, weeks, months, years).

You can also view how many times your breaks have overrun.

In this section you can add daily targets (either total time, or total number of tasks)
