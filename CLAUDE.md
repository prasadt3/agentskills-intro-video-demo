# AgentSkills Video Production Pipeline

This project contains motion graphics for AI-narrated promotional videos using React/Framer Motion with ElevenLabs voiceover.

## Project Structure

```
src/
├── app/
│   ├── App.tsx                           # Default horizontal app
│   ├── AppVertical.tsx                   # Default vertical app
│   ├── AppOpenClaw.tsx                   # OpenClaw horizontal
│   ├── AppOpenClawVertical.tsx           # OpenClaw vertical (Episode 1)
│   ├── AppMessageFlow.tsx                # Message Flow (Episode 2)
│   └── components/
│       ├── openclaw/                     # Horizontal OpenClaw frames
│       ├── openclaw-vertical/            # Vertical OpenClaw frames (9 frames)
│       └── message-flow/                 # Message Flow frames (7 frames)
│           └── shared/                   # Reusable components
public/
├── openclaw_natural.mp3                  # Episode 1 voiceover
└── message_flow.mp3                      # Episode 2 voiceover (to generate)
```

## URL Routes

Access different video versions via URL params:
- `?message-flow` - Episode 2: Message Flow (9 steps)
- `?openclaw-vertical` - Episode 1: OpenClaw Intro (vertical)
- `?openclaw` - OpenClaw horizontal version
- `?vertical` - Default vertical
- `?mute` - Disable audio for screen recording

Example: `localhost:5173?message-flow&mute`

## Video Production Pipeline

### Phase 1: Motion Design
- Create frame components with Framer Motion animations
- Use consistent animation patterns:
  - Fade up: `initial={{ opacity: 0, y: 20 }}`
  - Slide in: `initial={{ opacity: 0, x: -20 }}`
  - Scale: `initial={{ opacity: 0, scale: 0.9 }}`
- Stagger delays for list items

### Phase 2: Script Writing
Write scripts with emotional markers for ElevenLabs:
```
[confident] 9 steps happen between you hitting send...
[thoughtful] Step 1: Baileys receives your message.
[emphasis] Step 6: Now the AI sees your message.
```

### Phase 3: Voice Generation
Use ElevenLabs Text-to-Dialogue API:
```bash
curl -X POST "https://api.elevenlabs.io/v1/text-to-dialogue" \
  -H "xi-api-key: YOUR_API_KEY" \
  -d '{
    "text": "[script with markers]",
    "voice_id": "YOUR_VOICE_ID",
    "voice_settings": {
      "stability": 0.35,
      "similarity_boost": 0.85,
      "style": 0.25,
      "use_speaker_boost": true
    }
  }'
```

### Phase 4: Transcription
```bash
pip install openai-whisper
whisper voiceover.mp3 --model base --output_format json --word_timestamps True
```

### Phase 5: Timing Sync
Match transcript segments to frame durations. If using 1.2x speed:
```
Adjusted Duration = Original Duration ÷ 1.2
```

### Phase 6: Recording
1. Run dev server: `npm run dev`
2. Open `localhost:5173?[video-type]&mute`
3. Screen record at target resolution (1080x1920 for vertical)
4. Import to video editor, add audio track

### Phase 7: Export
- Vertical: 1080x1920 (9:16), 30fps, H.264, 10-15 Mbps
- Horizontal: 1920x1080 (16:9), 30fps, H.264, 15-20 Mbps

## Color Palette

| Element      | Hex       | Usage                    |
|--------------|-----------|--------------------------|
| Background   | #1f1f1e   | Base dark                |
| Primary Text | #FAF9F5   | Headlines, key text      |
| Accent       | #D97757   | Highlights, CTAs, AI     |
| Secondary    | #4A9EFF   | Flow arrows, connections |

## Episodes

### Episode 1: OpenClaw Intro
- 9 frames, ~75 seconds (at 1.2x speed)
- Introduces OpenClaw as AI gateway
- Files: `src/app/components/openclaw-vertical/`

### Episode 2: Message Flow
- 7 frames, ~65 seconds
- Shows 9 steps from send to AI response
- Files: `src/app/components/message-flow/`

## Voice Settings (Natural Sound)
```json
{
  "stability": 0.35,
  "similarity_boost": 0.85,
  "style": 0.25,
  "use_speaker_boost": true
}
```

## TikTok Safe Zone
Keep content away from top ~150px and bottom ~200px to avoid UI overlap. Use original font sizes (not bumped) for vertical videos.
