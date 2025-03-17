import pandas as pd
from google.colab import files
import os

# Step 1: Upload the CSV file
print("Please upload your contacts CSV file.")
uploaded = files.upload()

# Load the CSV file using pandas
filename = list(uploaded.keys())[0]
df = pd.read_csv(filename)

# Check for missing values
if df.isnull().any().any():
    print("Warning: There are missing values in the CSV file.")
    print(df[df.isnull().any(axis=1)])  # Show rows with missing values

# Drop rows with missing values
df = df.dropna(subset=['FirstName', 'Email'])

# Check the DataFrame structure
print("DataFrame shape:", df.shape)
print("First few rows of the DataFrame:")
print(df.head())

# Get column names for First Name and Email
first_name_column = 'FirstName'
email_column = 'Email'

# Step 2: Create AppleScript content
apple_script_content = ""

# Specify the correct attachment path
attachment_path = "/Users/senthilkumar/Desktop/Srigan Profile with Case Studies.pdf"

for index, row in df.iterrows():
    first_name = row[first_name_column]
    recipient_email = row[email_column]
    
    # Create the AppleScript command for sending an email
    apple_script_content += f'''
tell application "Mail"
    set newMessage to make new outgoing message with properties {{subject:"Reliability, Failure Analysis & Safety Analysis Software Tool", content:"Dear {first_name},\n\nHope you are doing good.\n\nThank you very much for your time...\n\nWe are looking for an opportunity to do business with you.\n\nI. We are supporting the below activities for Metro Rails/Aerospace Industries/Defence Organization/Manufacturers etc.,\n\n· Reliability (MTBF or Failure Rate) Prediction - Life of product(s)\n· Finding MTTR or Downtime of the system / subsystem / equipment / LRUs / LLRUs\n· Supporting on Availability Factors / Warranty Calculation, Process FMEA, Design FMEA, Root Cause Analysis, SIL Verification & Validation\n· Spare Parts Calculation.\n· Failure Modes, Effects and Criticality Analysis (Considering different modes of operation and different phases of the product life cycle).\n· System Safety Assurance, Safety Cases, Hazard Log & Risk Assessments (During Design / During Manufacturing / During Testing & Commissioning / During Operation & Maintenance etc.,)\n· Warranty Period support / AMC Support / DLP Support and many more...\n\nII. Developers of DRACAS Software - Defect/Failure Reporting Analysis and Corrective Action System.\n\n· We have more than 18 years of experience in Industrial Automation, RAMS / FRACAS or DRACAS / DLP etc., and have worked with different systems.\n· We are experts in 30+ standards / methodologies like MIL, IEC, EN, SAE, CENELEC, EPRD / NPRD, QS etc., including EN 50126-129.\n\nIII. We are dealing with Honeywell Automation Products.\n\n· Limit Switches & Micro Switches\n· Relays\n· Proximity Switches\n· Pressure Switches & Transmitters\n· Temperature Sensors & Transmitters\n· Digital controllers and programmers\n· Recorders and Data loggers etc.,\n\nWe do services of all kinds of controllers, programmers, recorders and data loggers…\n\nIV. Mentor / Trainer - Providing Skill Development Program at affordable cost on the below topics...\n\n1.   RAMS - Reliability, Availability, Maintainability and Safety.\n2.   EMI / EMC – Electromagnetic Interference / Compliance\n3.   FRACAS / DRACAS / Life Cycle Cost Analysis\n4.   Risk Management, Hazard, Hazop Study, Six Sigma\n5.   Project Management, Communication Skills etc.,\n\nRequesting you to please get back to us for any requirements related to RAMS, Defect Reporting, Analysis, and Corrective Action System (DRACAS) & EMC including DLP Support.\n\nLooking forward to receiving your reply / email.\n\nThank you very much…\n\nHave a great day!.\n\n--\nBest Regards,\nSenthilkumar Srinivasan,\n+91-9739718875.\n\nSRIGAN SYSTEM AND TECHNOLOGIES,\nNo. 710, First Floor,\nThird Cross, Third Main,\nKamala Nagar,\nBangalore - 560 079.\nKarnataka, India.\nE - Mail: srigansystem@gmail.com\nWebsite: http://ssat.yolasite.com", visible:true}}
    tell newMessage
        make new to recipient with properties {{address:"{recipient_email}"}}
        -- Attach PDF file
        make new attachment with properties {{file name:POSIX file "{attachment_path}"}}
    end tell
    send newMessage -- This line sends the email
end tell
'''

# Save the AppleScript to a file
script_filename = "send_mail_drafts.scpt"
with open(script_filename, 'w') as script_file:
    script_file.write(apple_script_content)

print(f"AppleScript saved as {script_filename}. You can run this script on your Mac to send emails using Apple Mail.")

# Provide the option to download the script
files.download(script_filename)
