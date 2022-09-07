"""
Tax 1099 Forms
"""

# Related third party imports
from django import forms


class Upload1099FileForm(forms.Form):
    # title = forms.CharField()
    # QUICK_SEARCH_EMAILS = get_quick_search_emails()
    # receiving_person = forms.ChoiceField(choices=QUICK_SEARCH_EMAILS, widget=forms.Select())
    file = forms.FileField()