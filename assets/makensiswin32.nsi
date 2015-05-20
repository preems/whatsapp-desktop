Name "WhatsApp"

OutFile "..\dist\WhatsAppWin32.exe"
InstallDir "$PROGRAMFILES\WhatsApp Desktop\"

Section

  RMDir /r $INSTDIR

  SetOutPath $INSTDIR

  File /r ..\build\WhatsApp\win32\*

  CreateShortCut "$SMPROGRAMS\WhatsApp.lnk" "$INSTDIR\WhatsApp.exe"
  CreateShortCut "$DESKTOP\WhatsApp.lnk" "$INSTDIR\WhatsApp.exe"

SectionEnd
