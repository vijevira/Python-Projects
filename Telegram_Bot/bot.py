from telegram import *
from telegram.ext import *

bot = Bot("1010877109:AAHa6JPCQdeYKUkZBOc9w7eF2D4SaLNARxE")
print(bot.get_me())
updater=Updater("1010877109:AAHa6JPCQdeYKUkZBOc9w7eF2D4SaLNARxE",use_context=True)

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