import cv2
import numpy as np
from collections import deque
import mediapipe as mp

from mediapipe.tasks.python import vision
from mediapipe.tasks.python.core.base_options import BaseOptions
from mediapipe.tasks.python.vision import HandLandmarker, HandLandmarkerOptions

# -------- Setup --------
model_path = "hand_landmarker.task"

options = HandLandmarkerOptions(
    base_options=BaseOptions(model_asset_path=model_path),
    num_hands=1
)

detector = HandLandmarker.create_from_options(options)

cap = cv2.VideoCapture(0)

# Drawing storage
bpoints=[deque(maxlen=1024)]
gpoints=[deque(maxlen=1024)]
rpoints=[deque(maxlen=1024)]
ypoints=[deque(maxlen=1024)]

blue_index=0
green_index=0
red_index=0
yellow_index=0

colors=[(255,0,0),(0,255,0),(0,0,255),(0,255,255)]
colorIndex=0

# Paint window
paintWindow = np.ones((471,636,3)) * 255

# -------- Helper --------
def get_landmarks(hand, w, h):
    return [(int(lm.x*w), int(lm.y*h)) for lm in hand]

def index_up(lm):
    return lm[8][1] < lm[6][1]

# -------- Main Loop --------
while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame,1)
    h,w,_ = frame.shape

    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    mp_img = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)

    result = detector.detect(mp_img)

    # -------- Draw UI --------
    frame = cv2.rectangle(frame,(40,1),(140,65),(0,0,0),2)
    frame = cv2.rectangle(frame,(160,1),(255,65),(255,0,0),2)
    frame = cv2.rectangle(frame,(275,1),(370,65),(0,255,0),2)
    frame = cv2.rectangle(frame,(390,1),(485,65),(0,0,255),2)
    frame = cv2.rectangle(frame,(505,1),(600,65),(0,255,255),2)

    cv2.putText(frame,"CLEAR",(49,33),cv2.FONT_HERSHEY_SIMPLEX,0.5,(0,0,0),2)
    cv2.putText(frame,"BLUE",(185,33),cv2.FONT_HERSHEY_SIMPLEX,0.5,(255,255,255),2)
    cv2.putText(frame,"GREEN",(298,33),cv2.FONT_HERSHEY_SIMPLEX,0.5,(255,255,255),2)
    cv2.putText(frame,"RED",(420,33),cv2.FONT_HERSHEY_SIMPLEX,0.5,(255,255,255),2)
    cv2.putText(frame,"YELLOW",(520,33),cv2.FONT_HERSHEY_SIMPLEX,0.5,(255,255,255),2)

    if result.hand_landmarks:
        lm = get_landmarks(result.hand_landmarks[0], w, h)

        center = lm[8]
        thumb = lm[4]

        cv2.circle(frame, center, 5, (0,255,0), -1)

        if index_up(lm):
            # Button clicks
            if center[1] <= 65:
                if 40 <= center[0] <=140:
                    bpoints=[deque(maxlen=1024)]
                    gpoints=[deque(maxlen=1024)]
                    rpoints=[deque(maxlen=1024)]
                    ypoints=[deque(maxlen=1024)]

                    blue_index=green_index=red_index=yellow_index=0
                    paintWindow[:] = 255

                elif 160 <= center[0] <= 255:
                    colorIndex = 0
                elif 275 <= center[0] <= 370:
                    colorIndex = 1
                elif 390 <= center[0] <= 485:
                    colorIndex = 2
                elif 505 <= center[0] <= 600:
                    colorIndex = 3
            else:
                if colorIndex==0:
                    bpoints[blue_index].appendleft(center)
                elif colorIndex==1:
                    gpoints[green_index].appendleft(center)
                elif colorIndex==2:
                    rpoints[red_index].appendleft(center)
                elif colorIndex==3:
                    ypoints[yellow_index].appendleft(center)
        else:
            bpoints.append(deque(maxlen=1024))
            gpoints.append(deque(maxlen=1024))
            rpoints.append(deque(maxlen=1024))
            ypoints.append(deque(maxlen=1024))

            blue_index+=1
            green_index+=1
            red_index+=1
            yellow_index+=1

    # -------- Drawing --------
    points=[bpoints,gpoints,rpoints,ypoints]

    for i in range(len(points)):
        for j in range(len(points[i])):
            for k in range(1,len(points[i][j])):
                if points[i][j][k-1] is None or points[i][j][k] is None:
                    continue
                cv2.line(frame,points[i][j][k-1],points[i][j][k],colors[i],2)
                cv2.line(paintWindow,points[i][j][k-1],points[i][j][k],colors[i],2)

    # -------- SHOW 2 WINDOWS --------
    cv2.imshow("Output", frame)        # Camera
    cv2.imshow("Paint", paintWindow)  # Drawing board

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()