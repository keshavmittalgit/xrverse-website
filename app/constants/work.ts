import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020',
    title: 'Guzar Jaega & Zaroorat',
    subtitle: 'Amitabh Bachchan, Shatrughan Sinha & 110 Indian Artists Anthem',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3.5, -3, -2.5),
    year: '2021',
    title: 'Zee Music & T-Series',
    subtitle: 'Saaz, Mukti, Ishaare & Saiyaan Productions',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-4, -1.5, -5.5),
    year: '2022',
    title: 'Megh Santoor',
    subtitle: 'Guinness World Record (Ideation & Execution)',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-1.5, -1, -8),
    year: '2023',
    title: 'Odisha State Museum',
    subtitle: 'Heritage Digitization, Interactive Software & Holograms',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0.5, 0, -10.5),
    year: '2024',
    title: 'Voice of America',
    subtitle: 'Chief Editor - "Influence India" 52 Documentary',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-1.5, -1.5, -13),
    year: '2025',
    title: 'Amritsar War Memorial',
    subtitle: 'Museum Immersive Content Creation & AV Design',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1.5, 1, -15),
    year: '2026',
    title: 'MP Museums Digitization',
    subtitle: 'Complete 3D Scanning of Artifacts Across All MP Museums',
    position: 'right',
  }
];
