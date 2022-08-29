from telegram import *
from telegram.ext import *

bot = Bot("enter your boat id here")
print(bot.get_me())
updater=Updater("enter your bot id here",use_context=True)

dispatcher=updater.dispatcher
# For Commands
def test_fnc2(update: Update, context: CallbackContext):
    bot.send_message(
        chat_id=update.effective_chat.id,
        text="Welcome to the Copyassignment.com ",
        )
start_value2=CommandHandler('start', test_fnc2)
dispatcher.add_handler (start_value2)

#adding more Command
def test_fnc(update: Update, context: CallbackContext):
    bot.send_message(
        chat_id=update.effective_chat.id,
        text="tutorial link: https://copyassignment.com/python/ ",
        )
start_value=CommandHandler('python', test_fnc)
dispatcher.add_handler (start_value)
