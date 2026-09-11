#!/usr/bin/env python3
"""Generate 1,000 animation, layout and color ideas (3,000 total)."""
import csv
from itertools import product
from pathlib import Path

OUT = Path(__file__).resolve().parent / "generated"
SRC = [f"SRC{i:02d}" for i in range(1, 12)]

A_TRIGGER = ["load","scroll-in","scroll-progress","hover","pointer","click","focus","drag","route","idle"]
A_TARGET = ["headline","media","card","nav","cta","background","object3d","icon","divider","footer"]
A_MOTION = ["fade-rise","scale","clip","blur","stagger","parallax","tilt","morph","marquee","spring"]
A_CONTEXT = ["hero/section title","hero/gallery media","feature card","navigation","conversion CTA","ambient background","immersive object","micro UI","section transition","closing/footer"]
A_IMPL = ["180-320ms ease-out; y 8-20px + opacity","180-320ms; scale .96→1","260-500ms clip/mask reveal","220-420ms blur 8→0px + opacity","40-80ms child delay; total <700ms","scroll-linked 4-12%; reduced-motion off","pointer max 4-6deg; reset on leave","shape/icon state morph; keep affordance","14-24s linear; pause when needed","soft spring; subtle overshoot"]
A_REDUCED = ["opacity/static","static","instant reveal","opacity-only","show all","static","no transform","crossfade","static/scroll row","instant/short fade"]

L_ARCH = ["saas","agency","portfolio","ecommerce","editorial","education","event","finance","product","community"]
L_STRUCTURE = ["split-hero","full-bleed","bento","asym-grid","editorial-cols","stacked-cards","sticky-rail","horizontal-showcase","timeline","mosaic"]
L_RHYTHM = ["airy","dense-to-airy","alternating","sticky-story","overlap","viewport-chapters","nested","edge-to-edge","narrow-center","offset"]
L_USE = ["premium/minimal whitespace","proof/data→spacious story","alternate copy/media","pinned narrative anchor","controlled visual depth","screen-by-screen chapters","grouped sub-sections","immersive width + inner grid","focused reading column","deliberate asymmetry"]
L_MOBILE = ["stack copy first","crop media intentionally","collapse 1-2 cols by priority","linearize semantic order","single reading col","one card/row","rail→tabs/accordion","accessible horizontal scroll","single vertical axis","simplify spans/aspect ratios"]

C_BG = [("ink","#0A0A0A","#F7F7F2"),("graphite","#171717","#FAFAF7"),("navy","#0B1020","#F3F6FF"),("cream","#F3EFE5","#171717"),("paper","#FAF8F2","#111111"),("white","#FFFFFF","#111111"),("sand","#E9E0D0","#201C18"),("mist","#EEF1F4","#101214"),("sage","#E6EADF","#172018"),("lavender","#EEEAF5","#19151F")]
C_PRIMARY = [("electric-blue","#3B5BFF"),("cobalt","#155EEF"),("cyan","#00A7C4"),("emerald","#0E9F6E"),("lime","#B7F34B"),("sun","#FFCC33"),("orange","#FF7A1A"),("coral","#FF5F57"),("magenta","#E84A9B"),("violet","#7C5CFC")]
C_SECONDARY = [("ice","#BFE8FF"),("mint","#BFEBD0"),("acid","#D8FF73"),("butter","#FFE89A"),("peach","#FFC7A8"),("rose","#FFB8D2"),("lilac","#C9B8FF"),("sky","#A8C7FF"),("aqua","#9CE8E0"),("silver","#C7CDD6")]
C_RULE = ["primary=CTA/key links; secondary=small highlights","primary=links; secondary=badges/status","60/30/10 hierarchy; accents <=15%","hero accent; lower sections neutral","alternate neutrals; accents encode hierarchy","secondary fills/borders; primary actions","gradient only on focal surfaces","dark mode: accent sparingly + contrast check","data-viz pair + labels/patterns","primary default; secondary hover/selected"]

def write(name, header, rows):
    OUT.mkdir(exist_ok=True)
    with (OUT / name).open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f); w.writerow(header); w.writerows(rows)
    print(f"{name}: {len(rows):,}")

def animations():
    rows=[]
    for i,(a,b,c) in enumerate(product(range(10), repeat=3),1):
        rows.append([f"A{i:04d}",A_TRIGGER[a],A_TARGET[b],A_MOTION[c],A_CONTEXT[b],A_IMPL[c],A_REDUCED[c],SRC[(i-1)%11]])
    write("animations.csv",["id","trigger","target","motion","context","implementation_hint","reduced_motion","source_family"],rows)

def layouts():
    rows=[]
    for i,(a,b,c) in enumerate(product(range(10), repeat=3),1):
        rows.append([f"L{i:04d}",L_ARCH[a],L_STRUCTURE[b],L_RHYTHM[c],L_USE[c],L_MOBILE[b],SRC[(i-1)%11]])
    write("layouts.csv",["id","archetype","structure","rhythm","use_case","mobile_rule","source_family"],rows)

def colors():
    rows=[]
    for i,(a,b,c) in enumerate(product(range(10), repeat=3),1):
        n,bg,txt=C_BG[a]; p,ph=C_PRIMARY[b]; s,sh=C_SECONDARY[c]
        rows.append([f"C{i:04d}",n,bg,txt,p,ph,s,sh,C_RULE[(i-1)%10],SRC[(i-1)%11]])
    write("colors.csv",["id","neutral","background","text","primary","primary_hex","secondary","secondary_hex","usage_rule","source_family"],rows)

if __name__ == "__main__":
    animations(); layouts(); colors()
