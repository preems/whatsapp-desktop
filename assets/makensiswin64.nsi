Name "WhatsApp"

OutFile "..\dist\WhatsAppWin64.exe"
InstallDir "$PROGRAMFILES\WhatsApp Desktop\"

Section

  RMDir /r $INSTDIR

  SetOutPath $INSTDIR

  File /r ..\build\WhatsApp\win64\*

  CreateShortCut "$SMPROGRAMS\WhatsApp.lnk" "$INSTDIR\WhatsApp.exe"
  CreateShortCut "$DESKTOP\WhatsApp.lnk" "$INSTDIR\WhatsApp.exe"

SectionEnd
