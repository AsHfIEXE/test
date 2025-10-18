# PhantomGuard Security Dashboard

A modern, real-time threat detection dashboard for PhantomGuard - a deception-based security monitoring system.

## Features

### Dashboard
- Real-time system status monitoring
- Key metrics cards (Total Events, Alerts, Blocked IPs, Active Decoys)
- Live event timeline with auto-refresh
- Threat level gauge visualization
- Top targeted decoys chart

### Events
- Comprehensive event listing with filtering
- Search by decoy path or source IP
- Time range filters (1h, 6h, 24h, 7d)
- Score-based filtering with slider
- Event details modal with full payload inspection
- Quick labeling (Benign, Attack, False Positive)
- Real-time updates every 5 seconds

### Alerts
- High-severity event management
- Color-coded severity badges (Low, Medium, High, Critical)
- Alert acknowledgment system
- Response action tracking
- Filter by acknowledged/unacknowledged status

### Decoys
- Grid and list view modes
- Decoy creation and management
- Access count tracking
- Content preview
- Multiple decoy types (File, SSH Key, Token, Config, Database)
- Delete with confirmation

### Analytics
- Time series event charts
- Score distribution histogram
- Top source IP statistics
- Decoy effectiveness visualization
- Multiple time range options

### Labels
- ML training data management
- Label filtering (All, Benign, Attack, False Positive)
- CSV export functionality
- Training statistics overview
- Bulk label deletion

### Settings
- System start/stop controls
- Dry run mode toggle
- Alert threshold configuration
- Polling interval settings
- Watcher path management
- Telegram integration configuration

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **Charts**: Recharts
- **State Management**: Zustand
- **Routing**: React Router v7
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Database Schema

The application uses Supabase with the following tables:
- `events` - Security event records
- `alerts` - High-severity alerts
- `decoys` - Honeypot decoy configurations
- `labels` - ML training labels
- `blocked_ips` - Blocked IP addresses
- `system_config` - System configuration
- `system_status` - Current system status

## Key Features

### Real-Time Updates
- Auto-polling every 5 seconds for live data
- Toast notifications for high-severity events
- Animated UI transitions

### Security-Focused Design
- Dark theme optimized for security operations centers
- Color-coded severity indicators
- Clear visual hierarchy
- Quick action buttons for rapid response

### Data Visualization
- Interactive charts with Recharts
- Responsive design for all screen sizes
- Comprehensive analytics dashboards

### Mock Data
- Automatic database seeding on first load
- Realistic sample events, alerts, and decoys
- Testing-ready data generators

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

The project uses Supabase for data persistence. Environment variables are pre-configured in `.env`:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── events/           # Event-related components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Third-party library configurations
├── pages/                # Main page components
├── services/             # API service layer
├── store/                # Zustand state management
├── types/                # TypeScript type definitions
└── utils/                # Utility functions and helpers
```

## Color Scheme

- Background: #0f1419 (dark slate)
- Surface: #1a1f2e
- Primary: #3b82f6 (blue)
- Success: #10b981 (green)
- Warning: #f59e0b (amber)
- Danger: #ef4444 (red)

Severity colors:
- Low (0-40): Green
- Medium (40-60): Yellow
- High (60-80): Orange
- Critical (80+): Red
