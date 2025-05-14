#!/bin/bash

# Create a new folder
mkdir first-folder

# Move into the first folder
cd first-folder

# Create a second folder inside the first folder
mkdir second-folder

# List (print) the contents of the first folder
ls

# Move into the second folder
cd second-folder

# Print the current path
pwd

# Move back to the original starting place (home directory)
cd ~ 

# Remove the first folder and everything inside it
rm -r first-folder

# Extension: Examples of cp, mv, cat, and find commands

# Create some example files
echo "This is file1" > file1.txt
echo "This is file2" > file2.txt

# Copy file1.txt to a new file called file1_copy.txt
cp file1.txt file1_copy.txt

# Rename file2.txt to file2_renamed.txt
mv file2.txt file2_renamed.txt

# Display the contents of file1.txt
cat file1.txt

# Find file1_copy.txt starting from the current directory
# Supress permission denied errors
find . -name "file1_copy.txt" 2>/dev/null 

# Clean up example files
rm file1.txt file1_copy.txt file2_renamed.txt

