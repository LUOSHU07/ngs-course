# IDT xGen hybridization capture of DNA libraries for NGS target enrichment protocol (NGS-10122-PR 05/2019)
URL: https://www.veritastk.co.jp/pdf/xgen-hybridization-capture-of-dna-libraries.pdf
See what more we can do for  you  at  www.idtdna.com .Version 4 For Research Use Only 
# Uses IDT’s: 
## • xGen Hybridization and Wash Kit 
## • xGen Universal Blockers—TS Mix, 10 bp TS Mix, or NXT 
## Mix 
## • xGen Lockdown Panels and Probe Pools 
## • xGen Gene Capture Pools 
## • xGen Library Amplification Primers 
# Uses IDT’s: 
## • Illumina platform-compatible libraries 
# next generation sequencing  protocol 
# For NGS target enrichment 
# xGen hybridization capture of 
# DNA libraries See what we can do for you at  www.idtdna.com . 2
Document version  Date released  Description of changes 
4 May 2019  Updated to specify that xGen Universal Blockers—NXT Mix can bind 
to Illumina Nextera adapter sequences with 8 bp or 10 bp indexes 
3 March 2019 
Added Appendix B to describe combining panels; 
removed instructions for preparing dry xGen Lockdown Probes 
since they are currently only provided in solution. 
2 June 2018  Updated to include 10 bp blockers 
1 April 2018  Original version 
# Revision history See what we can do for you at  www.idtdna.com . 3next generation sequencing  protocol 
# Table of contents 
Revision history  2
Introduction  5
xGen Lockdown Probe Pools  5
xGen blockers  5
xGen Hybridization and Wash Kit  5
Input recommendations  6
Input for library preparation  6
Input for capture  6
Concentrating DNA for hybrid capture  6
Consumables and equipment  7
Consumables from IDT  7
Consumables from other suppliers  7
Equipment  8
Plate protocol  9
Guidelines  9
Before you start  9
Workflow  10 
Perform hybridization reaction  11 
Prepare buffers  13 
Wash Streptavidin beads  15 
Perform bead capture  16 
Perform washes  16 
Perform post-capture PCR  18 
Purify post-capture PCR fragments  19 
Validate and quantify library  20 
Perform sequencing  20 See what we can do for you at  www.idtdna.com . 4next generation sequencing  protocol 
Tube protocol  21 
Guidelines  21 
Before you start  21 
Workflow  22 
Perform hybridization reaction  23 
Prepare buffers  24 
Wash Streptavidin beads  25 
Perform bead capture  26 
Perform washes  26 
Perform post-capture PCR  28 
Purify post-capture PCR fragments  29 
Validate and quantify library  30 
Perform sequencing  30 
Appendix A  31 
AMPure XP Bead DNA concentration protocol (Optional)  31 
Appendix B  33 
Combining xGen Lockdown Panels and Probes  33 xGen hybridization capture of DNA libraries for NGS target enrichment 5  
> Introduction |xGen Lockdown Probe Pools
# Introduction 
This protocol includes the steps necessary for target enrichment of a next generation 
library prepared from genomic DNA, using xGen Lockdown Panels or Probe Pools. Visit 
www.idtdna.com/protocols  to verify that you are using the most current version of this protocol. 
Important!  Do not use this optimized protocol with the previous xGen Lockdown Reagents 
kit (cat # 1072280 or 1072281) because you will not have sufficient volumes of some 
required buffers. 
## xGen Lockdown Probe Pools 
xGen Lockdown Probes are individually synthesized, 5’–biotinylated oligos for target capture 
applications in next generation sequencing. These probes are useful for creating custom 
capture panels that can be optimized, expanded, and combined with other panels. xGen 
Lockdown Probe Pools can also be used to enhance the performance of existing capture 
panels by rescuing poorly represented regions, such as areas of high GC content. For more 
information on combining xGen Lockdown Panels and Probes see  Appendix B .
xGen Lockdown Panels are predesigned and inventoried enrichment panels for targeted next 
generation sequencing. They are typically based on 1X tiling of xGen Lockdown Probes. Several 
research panels are available for the human genome, including panels for the whole exome, 
disease-related genes, and sample identification. Visit  www.idtdna.com/LockdownPanels 
for a complete list. 
## xGen blockers 
xGen Universal Blockers will bind to platform-specific adapter sequences on a designated strand 
to help prevent non-specific binding, improve the number of reads on target, and increase the 
depth of enrichment. Universal blockers—TS Mix and Universal blockers—10 bp TS Mix are 
compatible with ligation-based library prep techniques, such as Illumina’s TruSeq ™ library kits. 
Universal blockers—TS Mix is designed for 6- and 8-base, single- and dual-indexing schemes. 
Universal blockers—10 bp TS Mix is designed for 10-base, dual-indexing schemes. xGen 
Universal Blockers—NXT Mix binds to Illumina Nextera ™ adapter sequences with 
8 bp and 10 bp indexes. 
## xGen Hybridization and Wash Kit 
The components of the xGen Hybridization and Wash Kit have been optimized for the 
hybridization and wash steps in target capture protocols using xGen Lockdown Probe Pools. 
Note:  The Cot DNA provided with this kit serves to block repetitive elements for human 
DNA. If you are using a library composed of non-human DNA, consider using mouse Cot 
or salmon sperm DNA, or contact our NGS technical support group at 
applicationsupport@idtdna.com  for additional guidance. xGen hybridization capture of DNA libraries for NGS target enrichment 6  
> Input recommendations |Input for library preparation
## Input for library preparation 
This protocol was verified with libraries prepared from third party library preparation kits, 
including the KAPA ® Hyper Prep Kit, and the TruSeq and Nextera DNA Library Prep Kits from 
Illumina. For optimal results, we recommend using fragmented DNA between 150–350 bp. 
## Input for capture 
We recommend using 500 ng of each prepared library for hybrid capture. For exome captures, 
multiplexing has been tested on up to 12 samples (6 μg total DNA) with limited impact on data 
quality. Using less input for capture can result in higher duplicate rates, lower mean coverage, 
and poor coverage uniformity. 
## Concentrating DNA for hybrid capture 
For optimal results, use a SpeedVac ™ system (Savant) for concentrating DNA. Although a bead-
based concentration system can be used, our testing has found reproducible, though minor, 
adverse impact on GC bias during bead-based concentration. 
Note:  To multiplex a high quantity of samples, we recommend using a SpeedVac system; 
however, if you require a quicker turnaround, you may prepare the DNA samples following 
the instructions in  Appendix A: AMPure XP Bead DNA concentration protocol .
# Input recommendations xGen hybridization capture of DNA libraries for NGS target enrichment 7
Consumables and equipment  | Consumables from IDT 
## Consumables from IDT 
Item  Description  Catalog #  Storage 
xGen Lockdown Probe Pools  Custom— www.idtdna.com /CustomLockdownProbes 
Inventoried—  www.idtdna.com /LockdownPanels  Varies  –20°C 
xGen Hybridization and Wash Kit 
xGen Hybridization and Wash Kit, 16 rxn  1080577 
Box 1  –20°C 
Box 2  4°C 
xGen Hybridization and Wash Kit, 96 rxn  1080584 
Box 1  –20°C 
Box 2  4°C 
Blocking oligos for TruSeq libraries 
xGen Universal Blockers—TS Mix, 16 rxn  1075474 
–20°C 
xGen Universal Blockers—TS Mix, 96 rxn  1075475 
xGen Universal Blockers—TS Mix, 4 x 96 rxn  1075476 
xGen Universal Blockers—10 bp TS Mix, 16 rxn  1081100 
xGen Universal Blockers—10 bp TS Mix, 96 rxn  1081101 
xGen Universal Blockers—10 bp TS Mix, 4 x 96 rxn  1081102 
Blocking oligos for Nextera libraries 
xGen Universal Blockers—NXT Mix, 16 rxn  1079584 
–20°C xGen Universal Blockers—NXT Mix, 96 rxn  1079585 
xGen Universal Blockers—NXT Mix, 4 x 96 rxn  1079586 
xGen Library Amplification Primer 
16 rxn  1077675 
–20°C 96 rxn  1077676 
192 rxn  1077677 
Human Cot DNA  150 μL  1080768  –20°C 
650 μL  1080769 
(Optional) IDTE, pH 8.0  10 x 2 mL  11-01-02-05  room 
temp 
Nuclease-Free Water  10 x 2 mL  11-04-02-01  room 
temp 
Go to  www.idtdna.com/SDS  for safety data sheets (SDSs) and  www.idtdna.com/COA  for certificates of analysis (COAs) for IDT 
products. 
## Consumables from other suppliers 
Item  Supplier  Catalog # 
Ethanol  General laboratory supplier  Varies 
Agencourt ® AMPure ® XP- PCR Purification beads  Beckman-Coulter  A63880 
Digital electrophoresis chips 
Bio-Rad Experion ™ DNA 1K Analysis Kit  700-7107 
Agilent High Sensitivity DNA Kit  5067-4626 
Agilent High Sensitivity D1000 ScreenTape, 
or equivalent  5067-5584 
twin.tec ™ 96 Well LoBind PCR Plates, 
Semi-skirted (if working with multiple samples)  Eppendorf  0030129504 
KAPA HiFi HotStart ReadyMix  Kapa Biosystems  KK2601 
# Consumables and equipment xGen hybridization capture of DNA libraries for NGS target enrichment  8
Consumables and equipment  | Consumables from other suppliers 
Consumables from other suppliers (continued) 
Item  Supplier  Catalog # 
Library Quantification Kit – Illumina/Universal  Kapa Biosystems  KK4824 
MAXYMum Recovery ® Microtubes, 1.7 mL  VWR  22234-046 
MAXYMum Recovery PCR Tubes, 
0.2 mL flat cap (if following the tube protocol)  VWR  22234-056 
Buffer EB 
(or equivalent: 10 mM Tris-HCl, pH 8.5)  QIAGEN, or general laboratory supplier  19086 
Plate protocol: Microseal ® B PCR Plate Sealing 
Film, adhesive, optical  Bio-Rad  MSB1001 
Qubit ™ dsDNA HS Assay Kit  Thermo Fisher Scientific  Q32851 or 
Q32854 
## Equipment 
Item  Description 
Plate protocol 
Two thermal cyclers  Bio-Rad C/S1000 or T100 
Magnet (IDT qualified two options): 
• Magnum™ EX Universal Magnet Plate  Alpaqua (cat # A000380) 
• Magnetic Stand-96  Thermo Fisher Scientific (cat # AM10027) 
Plate centrifuge  General laboratory supplier 
Tube protocol 
Thermal cycler  Bio-Rad C/S1000 or T100 
Water bath or heating block  General laboratory supplier 
Magnet (IDT qualified two options): 
• DynaMag™-2 Magnet  Thermo Fisher Scientific (cat # 12321D) 
• DynaMag-PCR Magnet  Thermo Fisher Scientific (cat # 492025) 
Plate and tube protocols 
Microcentrifuge  General laboratory supplier 
Vacuum concentrator  Thermo Fisher Scientific SpeedVac ™ system (cat # varies) 
or equivalent 
Vortex mixer  General laboratory supplier 
qPCR system or fluorescence-based DNA 
quantitation system, such as Qubit ® fluorometer 
(Thermo Fisher Scientific) for final quantitation 
of library 
Various suppliers 
Digital electrophoresis system 
Bio-Rad Experion ™ Electrophoresis Station (cat #700-7010), 
Agilent 2100 Electrophoresis Bioanalyzer ® system (cat # G2939AA), 
Agilent 2200 TapeStation ® System (cat # G2965AA), or equivalent xGen hybridization capture of DNA libraries for NGS target enrichment 9  
> Plate protocol |Guidelines
We recommend performing the plate protocol instead of the tube protocol in most cases, since 
the plate protocol has demonstrated increased reproducability between samples and enables 
higher throughput. Our plate protocol has been developed for a maximum of 4 columns of 
samples in standard 96-well plate format (32 reactions at a time). We do not recommend running 
more than 32 samples at a time because the timing and temperature of washes will be impacted. 
If processing very few samples, you may prefer to use individual tubes over plates. If this is the 
case for your DNA library, follow the  Tube protocol. 
Note:  Using different instruments or equipment other than those specifically qualified for 
this protocol may require further optimization. 
## Guidelines 
During the 4 hr incubation, the sample plate needs to be sealed properly, either with adhesive 
seals or with a plate sealer, to avoid evaporation. Excessive evaporation during hybridization 
can lead to capture failure. 
The duration of hybridization should be kept consistent for all samples within a project. For 
GC-rich or small panels (<1000 probes), longer hybridization times (up to 16 hr) may improve 
performance. 
## Before you start 
Two thermal cyclers, set at different incubation temperatures, are used for hybrid capture in this 
protocol. 
1.  Create the following PCR programs: 
HYB program  (lid set at 100°C)    
> 95°C 30 sec
> 65°C 4 hr
> 65°C Hold
WASH  program ( lid set at 70°C*)  
> 65°C Hold
> * It is critical to reduce the lid temperature to 70°C for the WASH program.
# Plate protocol xGen hybridization capture of DNA libraries for NGS target enrichment 10 
Plate protocol  | Workflow 
2.  Prepare the xGen Lockdown Probes. 
• If you received the xGen Lockdown Probes as a hydrated solution: 
– Thaw at room temperature (RT, 15–25°C). 
– Mix thoroughly and centrifuge briefly. 
• If you receive Gene Capture Pools (GCPs) in individual wells: 
– Mix 4 μL of each GCP and dry down. 
– Resuspend in 4 μL of Nuclease-Free Water. 
For information on how to use these products in combination, see  Appendix B .
## Workflow 
Prepare buffers Wash streptavidin beads Perform bead capture Combine DNA with blockers Dry down DNA Perform hybridization reaction Perform washes Total time: 15 minutes* Total time: 15 minutes* Total time: 45 minutes Total time: 15 minutes Total time: Variable Total time: 4–16 hours Total time: 30 minutes Perform post-capture PCR Purify post-capture PCR fragments Total time: 30 minutes Total time: 30 minutes 
# 2341567
> * Perform during hybridization reaction xGen hybridization capture of DNA libraries for NGS target enrichment
11   
> Plate protocol |Perform hybridization reaction
## Perform hybridization reaction 
Note:  To multiplex a high quantity of samples, we recommend using a SpeedVac system; 
however, if you require a quicker turnaround, prepare the beads following the instructions 
in  Appendix A: AMPure XP Bead DNA concentration protocol .
1.  Create the Blocker Master Mix in a tube. Multiply by the number of samples and add a 10% 
overfill. 
Blocker Master Mix component  Volume per reaction (μL)   
> Human Cot DNA 5
> xGen Blocking Oligos based on your library adapters 2
2.  Vortex to mix well. 
3.  Add 7 μL of the Blocker Master Mix to each well of a LoBind plate. 
4.  Add 500 ng of library to each well containing Blocker Master Mix. 
If multiplexing samples, use 500 ng of each library. 
Note:  We recommend using wells in the middle of the plate. Avoid using wells on the 
plate edges because evaporation is more likely to occur in the outer rows and 
columns if the plate is not sealed properly. 
Tip:  Mark the wells that contain DNA before drying down the plate, since they will not 
be distinguishable from empty wells after dry down. 
A1 2 3 4 5 6 7 8 9 10 11 12 BCDEFGHxGen hybridization capture of DNA libraries for NGS target enrichment 12   
> Plate protocol |Perform hybridization reaction
5.  Dry down the mixture in a SpeedVac system. 
Safe stop:  Be sure to seal the sample plate. Store the plate at RT overnight, or –20°C 
for longer. 
6.  Thaw all contents of the xGen Hybridization and Wash Kit to room temperature. 
Note:  Inspect the tube of 2X Hybridization Buffer for cyrstallization of salts. If cyrstals 
are present, heat the tube at 65°C, shaking intermittently, until the buffer is 
completely solubililzed; this may require heating for several hours. 
7.  Create the Hybridization Master Mix in a tube. Multiply by the number of samples and add 
a 10% overfill. 
Hybridization Master Mix component  Volume per reaction (μL)        
> xGen 2X Hybridization Buffer 8.5
> xGen Hybridization Buffer Enhancer 2.7
> xGen Lockdown Panel or custom probes 4
> Nuclease-Free Water* 1.8
> * Do not use water if using an xGen spike-in panel. See Appendix B for more information.
8.  Vortex or pipet the mix to mix well. 
9.  Add 17 μL of the Hybridization Master Mix to each well of the plate containing dried DNA. 
Note:  If you are combining two panels, see  Appendix B  for spike-in volume details. 
10.  Securely seal the plate with a Microseal B seal. 
11.  Incubate at least 5 min at room temperature. 
12.  Vortex the samples, making sure that they are completely mixed. 
13.  Briefly centrifuge the samples. 
14.  Place the plate on the thermal cycler and start the HYB program. xGen hybridization capture of DNA libraries for NGS target enrichment 13   
> Plate protocol |Prepare buffers
## Prepare buffers 
Note:  Before preparing the buffers, remove the Dynabeads ® M-270 Streptavidin beads 
from storage at 4°C. Equilibrate the beads at room temperature at least 30 min before 
performing the washes. 
1.  Dilute the following xGen buffers to create 1X working solutions as follows, multiplying by 
the required number of samples and adding 10% overfill: 
Component  Nuclease-Free 
Water (μL)  Buffer (μL)  Total (μL)                
> xGen 2X Bead Wash Buffer 150 150 300
> xGen 10X Wash Buffer 1 225 25 250
> xGen 10X Wash Buffer 2 135 15 150
> xGen 10X Wash Buffer 3 135 15 150
> xGen 10X Stringent Wash Buffer 270 30 300
Note:  If Wash Buffer 1 is cloudy, heat the bottle in a 65°C water bath to allow 
resuspension. 
Tip:  The 1X working solutions are stable at room temperature (15–25°C) 
for up to 4 weeks. xGen hybridization capture of DNA libraries for NGS target enrichment 14   
> Plate protocol |Prepare buffers
2.  Use a fresh PCR plate. For 32 samples, as an example, aliquot and label the plate as follows: 
• Columns 1–4: 110 μL of Wash buffer 1 
• Columns 5–8: 160 μL of Stringent Wash Buffer 
• Columns 9–12: 160 μL of Stringent Wash Buffer 
A1 2 3 4 5 6 7 8 9 10 11 12 BCDEFGH
65°C Wash Buffer 1 65°C stringent wash 65°C stringent wash 
Important!  Do not discard the remaining Wash Buffer 1. The remaining buffer is 
needed to perform the  Room temperature washes  later in the protocol. 
3.  Seal the buffer plate and set aside. 
4.  In a LoBind tube, make the Bead Resuspension Mix. Multiply by the number of samples and 
add a 10% overfill. 
Bead Resuspension Mix component  Volume per reaction (μL)      
> xGen 2X Hybridization Buffer 8.5
> xGen Hybridization Buffer Enhancer 2.7
> Nuclease-Free Water 5.8 xGen hybridization capture of DNA libraries for NGS target enrichment 15
> Plate protocol |Wash Streptavidin beads
## Wash Streptavidin beads 
Important!  Only perform bead washes with beads that have equilibrated to room 
temperature. 
1.  Mix the beads thoroughly by vortexing for 15 sec. 
2.  Add 50 μL of Streptavidin beads to a new PCR plate, filling a well for every sample being 
captured. 
3.  Add 100 μL of Bead Wash Buffer from  Prepare buffers, step  1 to each well, then gently 
pipet the mix 10 times. 
4.  Place the plate containing beads on a magnet and allow the beads to fully separate from 
the supernatant (approximately 1 min). 
5.  Remove and discard the clear supernatant, ensuring that the beads remain in the well. 
6.  Remove the plate containing beads from the magnet. 
7.  Perform the following wash: 
a.  Add 100 μL of Bead Wash Buffer to each well containing beads, then gently pipet the 
mix 10 times. 
b.  Place the plate on the magnet for approximately 1 min, allowing beads to fully 
separate from the supernatant. 
c.  Carefully remove and discard the clear supernatant. 
8.  Perform an additional wash by repeating  step 7  (above) for a total of 2 washes. 
9.  Resuspend the beads in 17 μL of Bead Resuspension Mix from  Prepare buffers, step 4 .
10.  Mix thoroughly to ensure the beads are not left to dry in the well. If needed, briefly 
centrifuge the plate containing beads at 25  x g (400 rpm). xGen hybridization capture of DNA libraries for NGS target enrichment 16   
> Plate protocol |Perform bead capture
## Perform bead capture 
Important!  If any of the sample accidentally splashes onto the plate seal while vortexing in 
Perform bead capture , briefly and gently centrifuge the plate (10 sec at 25 x  g). 
1.  Start the WASH program in the second thermal cycler to start warming the buffer plate 
prepared in  Prepare buffers, step 2 . Make sure the lid temperature is set to 70°C for the 
WASH program. 
Note:  The buffer plate needs to warm up for  at least  15 min. We recommend starting 
incubation at the same time as the bead capture. 
2.  After the 4 hr incubation is complete, remove the sample plate from the thermal cycler. 
3.  Once the sample plate has been removed from the instrument, stop the HYB program. 
4.  Immediately after the HYB program is complete, start the WASH program. 
Tip:  At this point, both thermal cyclers should be running the WASH program. 
5.  Using a multichannel pipette and fresh LoBind tips, transfer the fully homogenized beads to 
the samples. 
6.  Securely seal the sample plate. 
7.  Gently vortex the sample plate until it is fully mixed, being careful not to splash onto the 
plate seal. 
8.  Place the sample plate in the thermal cycler for 45 min. During incubation, remove the plate 
every 10–12 min to quickly and gently vortex. 
Note:  It is safe to place the sample plate in the thermal cycler before the lid 
temperature has fully cooled to 70°C when starting the incubation. 
## Perform washes 
Important!  Always keep the buffer plate on the thermal cycler during washes. Make sure to 
reseal the buffer plate in between washes. 
When performing the heated washes, keep the buffer plate on the thermal cycler to maintain its 
set temperature. 
Heated washes 
1.  After 45 min, remove the sample plate from the thermal cycler. 
2.  With the buffer plate remaining in the thermal cycler, transfer 100 μL of heated Wash Buffer 1 
to each sample and pipet the mix 10 times, being careful to minimize bubble formation. 
3.  Reseal the buffer plate, then close the lid. xGen hybridization capture of DNA libraries for NGS target enrichment 17   
> Plate protocol |Perform washes
4.  Place the sample plate on the magnet for 1 min. Remove the supernatant. 
Note:  Due to the supernatant having a high concentration of hybridization buffer and 
enhancer, use appropriate disposal methods. 
5.  Remove the sample plate from the magnet, then add 150 μL of heated Stringent Wash 
Buffer to each well containing a sample. 
6.  Reseal the buffer plate, then close the lid. 
7.  Pipet the mix 10 times, being careful to minimize bubble formation. Always use fresh 
pipette tips for each well. 
8.  Securely seal the sample plate, then incubate for 5 min in the thermal cycler. 
9.  Place the sample plate on the magnet for 1 min, then remove the supernatant. 
10.  Remove the sample plate from the magnet, then add 150 μL of heated Stringent Wash 
Buffer from the buffer plate to the sample plate. 
11.  Pipet the mix 10 times, being careful to minimize bubble formation. Securely seal the 
sample plate, then incubate for 5 min on the thermal cycler. 
12.  Place the sample plate on the magnet for 1 min. 
Room temperature washes 
Important!  To ensure that the beads remain fully resuspended, vigorously mix the samples 
during the room temperature washes. 
1.  Remove supernatant. Add 150 μL of Wash Buffer 1. 
2.  Securely seal the sample plate with a  fresh  seal, then vortex at full-speed thoroughly, until 
fully resuspended. 
Important!  It is critical to use a new seal at this step to avoid the risk of contamination 
because there will be some bead splash on the seal. 
3.  Incubate for 2 min while alternating between vortexing for 30 sec and resting for 30 sec, to 
ensure the mixture remains homogenous. 
4.  Centrifuge the sample plate for 5 sec at 25 x  g.
Important!  This brief centrifugation of the sample plate is a critical step to avoid 
well-to-well contamination. 
5.  Place the sample plate on the magnet for 1 min, then remove and discard the seal. 
6.  Remove the supernatant, then remove the sample plate from the magnet. 
7.  Add 150 μL of Wash Buffer 2, then securely seal the sample plate with a fresh seal and 
vortex thoroughly until fully resuspended. 
8.  Incubate for 2 min while alternating between vortexing for 30 sec and resting for 30 sec, 
to ensure the mixture remains homogenous. xGen hybridization capture of DNA libraries for NGS target enrichment 18   
> Plate protocol |Perform post-capture PCR
9.  After the incubation, briefly centrifuge the sample plate (5 sec at 25  x g). 
10.  After centrifuging, place the sample plate on the magnet for 1 min, then remove and 
discard the seal. 
11.  Remove the supernatant, then remove the sample plate from the magnet. 
12.  Add 150 μL of Wash Buffer 3, then securely seal the sample plate with a fresh seal and 
vortex thoroughly until fully resuspended. 
13.  Incubate for 2 min while alternating between vortexing for 30 sec and resting for 30 sec, to 
ensure the mixture remains homogenous. 
14.  After the incubation, briefly centrifuge the sample plate (5 sec at 25  x g). 
15.  After centrifuging, place the sample plate on the magnet for 1 min, then remove and 
discard the seal. 
16.  Remove the supernatant. 
17.  With the sample plate still on the magnet, use fresh pipette tips to ensure 
that all residual Wash Buffer 3 has been removed, then remove the plate from the magnet. 
18.  Add 20 μL of Nuclease-Free Water to each capture. 
19.  Pipet the mix 10 times to resuspend any beads stuck to the side of the well. 
Important!  Do not discard the beads. You will use the entire 20 μL of resuspended 
beads with captured DNA in  Perform post-capture PCR .
## Perform post-capture PCR 
1.  In a tube, prepare the Amplification Reaction Mix, multiplied by the number of samples on 
the plate and adding 10% overfill, as follows:     
> Amplification Reaction Mix component Volume (μL)
> 2X KAPA HiFi HotStart ReadyMix 25
> xGen Library Amplification Primer 1.25
> Nuclease-Free Water 3.75
Note:  If using a different master mix than KAPA HiFi, the magnesium concentration 
may need to be optimized for on-bead PCR. 
2.  Add 30 μL of the Amplification Reaction Mix to each sample for a final reaction volume of 
50 μL. 
3.  Securely seal the sample plate, then gently vortex the plate to thoroughly mix the reaction. 
4.  Briefly centrifuge the plate. xGen hybridization capture of DNA libraries for NGS target enrichment 19   
> Plate protocol |Purify post-capture PCR fragments
5.  Place the plate in a thermal cycler, and run the following program with the lid temperature 
set to 105°C: 
Step  Number of cycles  Temperature (°C)  Time          
> Polymerase activation 198 45 sec
> Amplification
> Denaturation
> Annealing
> Extension
> Variable—refer to the
> Panel table below.
> 98
> 60
> 72
> 15 sec
> 30 sec
> 30 sec
> Final extension 172 1 min
> Hold 14Hold
Note:  The number of PCR cycles should be optimized per panel size and the 
number of pooled libraries per capture, to ensure there is enough yield for 
sequencing. 
We recommend starting optimization with the following: 
Panel size  1-plex  4-plex  8-plex  12-plex                 
> >100,000 probes (xGen Exome) 10 cycles 8 cycles 7 cycles 6 cycles
> 10,000–100,000 probes 12 cycles 10 cycles 9 cycles 8 cycles
> 500–10,000 probes 13 cycles 11 cycles 10 cycles 10 cycles
> 1–500 probes 14 cycles 12 cycles 11 cycles 11 cycles
Optional stopping point:  Amplified captures may be stored at 4°C overnight. 
## Purify post-capture PCR fragments 
Important!  Ensure Agencourt AMPure XP beads have been equilibrated to room 
temperature before proceeding. 
1.  Prepare 250 μL of fresh 80% ethanol per sample, multiplied by the number of samples with 
a 10% overfill. 
2.  Add 75 μL (1.5X volume) of Agencourt AMPure XP beads to each amplified capture. 
3.  After adding the beads, pipet the mix thoroughly and incubate for 5–10 min. 
4.  Place the plate on the magnet until the supernatant is clear (2–5 min). 
5.  Remove the supernatant without disturbing the beads. 
6.  While keeping the plate on the magnet, add 125 μL of 80% ethanol, then incubate for 
1 min. 
7.  Remove the ethanol, then repeat another ethanol wash. 
8.  Allow the beads to air dry for 1–3 min. Do not overdry the beads. 
9.  Remove the sample plate from the magnet and elute in 22 μL of Buffer EB, or equivalent 
(10 mM Tris-Cl, pH 8.5). Mix thoroughly. Alternatively, TE can be used. xGen hybridization capture of DNA libraries for NGS target enrichment 20   
> Plate protocol |Validate and quantify library
10.  Incubate for 5 min at room temperature. 
11.  Place the plate on a magnet until supernatant is clear (1–2 min). 
12.  Transfer 20 μL of eluate to a fresh plate, making sure that no beads are 
carried over. 
Optional stopping point:  Purified PCR fragments may be stored at –20°C for up to 
1 week. 
## Validate and quantify library 
1.  Measure the concentration of the captured library using a fluorescence-based method for 
DNA quantitation (such as Qubit dsDNA HS Assay kit) or qPCR. 
Note:  Knowing the concentration of your captured library helps ensure your library is 
within the detection limits of the chip or tape (as measured in  step 2 , below) for use 
on your digital electrophoresis system. 
2.  Measure the average fragment length of the captured library on a digital electrophoresis 
system (e.g., the BioRad Experion System using a DNA 1K chip, the Agilent 2100 
Bioanalyzer using a high sensitivity DNA chip, or the Agilent 2200 TapeStation system using 
a DNA tape or other similar system). 
## Perform sequencing 
Perform sequencing according to the instructions for your Illumina instrument. xGen hybridization capture of DNA libraries for NGS target enrichment 21   
> Tube protocol |Guidelines
# Tube protocol 
This protocol has been developed for a maximum of 6 capture reactions using individual tubes. 
If you are using plates for your DNA library, use the  Plate protocol .
Note:  Despite the similar workflow, using the plate protocol reduces sample variability 
when compared to the tube protocol. 
Tip:  Using alternative instruments or equipment not validated in this protocol may 
require optimization. 
## Guidelines 
During the 4 hr incubation, the tube needs to be sealed properly to avoid evaporation. 
Excessive evaporation during the hybridization can lead to capture failure. 
The duration of hybridization should be kept consistent for all samples within a project. For 
GC-rich or small panels (<1000 probes), longer hybridization times (up to 16 hr) may improve 
performance. 
## Before you start 
Two cycling programs, set at different incubation temperatures, are used for hybridization capture 
in this protocol. 
1.  Create the following PCR programs: 
HYB program (lid set at 100°C)    
> 95°C 30 sec
> 65°C 4 hr
> 65°C Hold
WASH program (lid set at 70°C*)  
> 65°C Hold
> * It is critical to educe the lid temperature to 70°C for the WASH program.
xGen hybridization capture of DNA libraries for NGS target enrichment 22 
Tube protocol  | Workflow 
2.  Prepare the xGen Lockdown Probes. 
• If you received the xGen Lockdown Probes as a hydrated solution: 
– Thaw at room temperature (15–25°C). 
– Mix thoroughly and centrifuge briefly. 
• If you receive Gene Capture Pools in individual wells: 
– Mix 4 μL of each GCP and dry down. 
– Resuspend in 4 μL of Nuclease-Free Water. 
For information on how to use these products in combination, see  Appendix B .
## Workflow 
Prepare buffers Wash streptavidin beads Perform bead capture Combine DNA with blockers Dry down DNA Perform hybridization reaction Perform washes Total time: 15 minutes* Total time: 15 minutes* Total time: 45 minutes Total time: 15 minutes Total time: Variable Total time: 4–16 hours Total time: 30 minutes Perform post-capture PCR Purify post-capture PCR fragments Total time: 30 minutes Total time: 30 minutes 
# 2341567
> * Perform during hybridization reaction xGen hybridization capture of DNA libraries for NGS target enrichment
23   
> Tube protocol |Perform hybridization reaction
## Perform hybridization reaction 
Note:  To multiplex a high quantity of samples, we recommend using a SpeedVac system; 
however, if you require a quicker turnaround, prepare the beads following the instructions 
in  Appendix A: AMPure XP Bead DNA concentration protocol .
1.  In a 1.7 mL MAXYMum Recovery microtube (low-bind), add the following components: 
Blocker component  Volume per reaction (μL)   
> Human Cot DNA 5
> xGen Blocking Oligos based on your library adapters 2
2.  Add 500 ng of library to each tube containing Blocker components. 
If multiplexing samples, use 500 ng of each library. 
3.  Dry down the mixture in a SpeedVac system. 
Safe Stop:  Be sure to seal the sample tube. Store the sample at RT overnight, 
or –20°C for longer. 
4.  Thaw all contents of the xGen Hybridization and Wash Kit to room temperature. 
Note:  Inspect the tube of 2X Hybridization Buffer for cyrstallization of salts. If cyrstals 
are present, heat the tube at 65°C, shaking intermittently, until the buffer is completely 
solubililzed; this may require heating for several hours. 
5.  Create the Hybridization Master Mix by adding the following components to the tube from 
step  2 (above). 
Hybridization Master Mix component  Volume per reaction (μL)         
> xGen 2X Hybridization Buffer 8.5
> xGen Hybridization Buffer Enhancer 2.7
> xGen Lockdown Panel or custom probes 4
> Nuclease-Free Water* 1.8
> *Do not use water if using an xGen spike-in panel. See Appendix B for more information.
6.  Pipet the mix, then incubate at room temperature for 5–10 min. 
7.  Vortex, then briefly centrifuge. 
8.  Transfer 17 μL of the capture to a low-bind 0.2 mL PCR tube, then briefly centrifuge. 
Note:  If you are combining two panels, see  Appendix B  for spike-in volume details. 
9.  Place the sample tube in the thermal cycler and start the HYB program. xGen hybridization capture of DNA libraries for NGS target enrichment 24 
Tube protocol  | Prepare buffers 
## Prepare buffers 
Note:  Before preparing the buffers, remove the Dynabeads M-270 Streptavidin beads from 
storage at 4°C. The beads need to be at room temperature for a minimum of 30 min before 
performing the washes. 
1.  Dilute the following xGen buffers to create 1X working solutions: 
Component 
Nuclease-
Free 
Water (μL) 
Buffer 
(μL) 
Total 
(μL)  Storage 
xGen 2X Bead Wash Buffer  160  160  320  Keep at room temperature. 
xGen 10X Wash Buffer 1  252  28  280 
Aliquot 110 μL of the 1X  Buffer into a 
separate tube and heat to 65°C. The 
remaining solution should be kept at 
room temperature. 
xGen 10X Wash Buffer 2  144  16  160  Keep at room temperature. 
xGen 10X Wash Buffer 3  144  16  160  Keep at room temperature. 
xGen 10X Stringent Wash Buffer  288  32  320 
Aliquot into two tubes (160 μL each). 
Heat tubes to 65°C in a water bath 
or heating block. 
Note:  If Wash Buffer 1 is cloudy, heat the bottle in a 65°C water bath to allow 
resuspension. 
Tip:  The 1X working solutions are stable at room temperature (15–25°C) for up to 
4 weeks. 
2.  Prepare the following Bead Resuspension Mix in a low-bind tube: 
Bead Resuspension Mix component  Volume per reaction (μL) 
xGen 2X Hybridization Buffer  8.5 
xGen Hybridization Buffer Enhancer  2.7 
Nuclease-Free Water  5.8 xGen hybridization capture of DNA libraries for NGS target enrichment 25   
> Tube protocol |Wash Streptavidin beads
## Wash Streptavidin beads 
Important!  Only perform bead washes with beads that have equilibrated to room 
temperature. 
1.  Mix the beads thoroughly by vortexing for 15 sec. 
2.  Aliquot 50 μL of streptavidin beads per capture into a single 1.7 mL low-bind tube. For 
example, for 1 capture, prepare 50 μL of beads and for 2 captures, prepare 100 μL of beads. 
3.  Add 100 μL of Bead Wash Buffer per capture. Gently pipet the mix 10 times. 
4.  Place the tube on a magnetic rack, allowing the beads to fully separate from the 
supernatant (approximately 1 min). 
5.  Remove and discard the clear supernatant, ensuring that the beads remain in the tube. 
6.  Remove the tube from the magnet. 
7.  Perform the following wash: 
a.  Add 100 μL of Bead Wash Buffer per capture, then pipet the mix 10 times. 
b.  Place the tube on a magnetic rack for approximately 1 min, allowing the beads to fully 
separate from the supernatant. 
c.  Carefully remove and discard the clear supernatant. 
8.  Perform an additional wash by repeating  step 7  (above) for a total of 2 washes. 
9.  Resuspend the beads in 17 μL per capture of Bead Resuspension Mix from 
Prepare buffers, step 2 .
10.  Mix thoroughly to ensure that the beads are not left to dry in the tube. 
If needed, briefly centrifuge the tube at 25  x g (400 rpm). 
11.  Aliquot 17 μL of resuspended beads into a new low-bind 0.2 mL tube for each 
capture reaction. xGen hybridization capture of DNA libraries for NGS target enrichment 26   
> Tube protocol |Perform bead capture
## Perform bead capture 
1.  Place the 1X Wash Buffer 1 (110 μL aliquot) and the 1X Stringent Wash Buffer (both aliquots) 
in a 65°C water bath for at least 15 min. 
Tip:  The buffers will be used during the  Heated washes , but we recommend starting 
this incubation at the same time as the bead capture, so that the buffers will be at the 
correct temperature when needed. 
2.  After the 4 hr incubation, take the tube out of the thermal cycler. 
3.  Once removed, stop the HYB program. 
4.  Immediately after the HYB program completes, start the WASH program. 
5.  Transfer 17 μL of resuspended streptavidin beads to the 0.2 mL tube containing 
the sample. 
6.  Vortex to ensure that sample is fully resuspended. Gently and briefly centrifuge, if needed 
(10 sec at 25  x g). 
7.  Place the sample tube in the thermal cycler and set a timer for 45 min. 
Note:  It is safe to place the sample tubes in the thermal cycler before the lid 
temperature has fully cooled to 70°C when starting the incubation. 
8.  Every 10–12 min, remove the tube from the thermal cycler and gently vortex to ensure the 
sample is fully resuspended. 
9.  At the end of the 45 min, take the sample off the thermal cycler. Proceed immediately to 
Heated washes .
## Perform washes 
Important!  It is critical to ensure that the buffers have reached 65°C in a water bath before 
starting the  Heated washes .
Heated washes 
1.  Transfer 100 μL of heated Wash Buffer 1 to the sample, pipet the mix 10 times, being careful 
to minimize bubble formation. 
2.  Place the tube on a magnetic rack for 1 min. Remove the supernatant. 
Note:  Due to the supernatant having a high concentration of hybridization buffer 
and enhancer, use appropriate disposal methods. 
Tip:  If you do not have a magnetic rack that holds 0.2 mL tubes, transfer the entire 
reaction to a 1.7 mL tube. 
3.  Remove the tube from the magnet and add 150 μL of heated Stringent Wash Buffer to the 
sample. 
4.  Pipet the mix 10 times, being careful to not introduce bubbles. xGen hybridization capture of DNA libraries for NGS target enrichment 27   
> Tube protocol |Perform washes
5.  Incubate in the water bath at 65°C for 5 min. 
6.  Place the sample on the magnet for 1 min. Remove the supernatant. 
7.  Remove the tube from the magnet and add 150 μL of heated Stringent Wash Buffer to the 
sample. 
8.  Pipet the mix 10 times, being careful to not introduce bubbles. 
9.  Incubate in the water bath at 65°C for 5 min. 
10.  Place the tube on a magnet for 1 min. 
Room temperature washes 
Important!  To ensure the beads remain fully resuspended, vigorously mix the samples 
during the room temperature washes. 
1.  Remove and discard supernatant. Add 150 μL of Wash Buffer 1 equilibrated to room 
temperature. 
2.  Vortex thoroughly until fully resuspended. 
3.  Incubate for 2 min while alternating between vortexing for 30 sec and resting for 30 sec, 
to ensure the mixture remains homogenous. 
4.  At the end of the incubation, briefly centrifuge the tube. 
5.  Place on the magnet for 1 min. 
6.  Remove the supernatant. Add 150 μL of Wash Buffer 2. 
7.  Vortex thoroughly until fully resuspended. 
8.  Incubate for 2 min while alternating between vortexing for 30 sec and resting for 30 sec, 
to ensure the mixture remains homogenous. 
9.  At the end of the incubation, briefly centrifuge the tube. 
10.  Place on the magnet for 1 min. 
11.  Remove the supernatant. Add 150 μL of Wash Buffer 3. 
12.  Vortex thoroughly until fully resuspended. 
13.  Incubate for 2 min while alternating between vortexing for 30 sec and resting for 30 sec, 
to ensure the mixture remains homogenous. 
14.  At the end of the incubation, briefly centrifuge the tube. 
15.  Place the sample tube on the magnet for 1 min. 
16.  Remove and discard the supernatant. 
17.  With the sample tube still on the magnet, use a fresh pipette tip to remove residual Wash 
Buffer 3 from the tube, then remove the tube from the magnet. 
18.  Add 20 μL of Nuclease-Free Water to each capture. 
19.  Pipet the mix 10 times to resuspend any beads stuck to the side of the tube. 
Important!  Do not discard the beads. Use the entire 20 μL of resuspended beads 
with captured DNA in  Perform post-capture PCR .xGen hybridization capture of DNA libraries for NGS target enrichment 28 
Tube protocol  | Perform post-capture PCR 
## Perform post-capture PCR 
1.  If a 1.7 mL tube was used for the washes, transfer the sample to a low-bind 
0.2 mL PCR tube. 
2.  Add the following components to create the Amplification Reaction Mix: 
Amplification Reaction Mix component  Volume per reaction (μL) 
2X KAPA HiFi HotStart ReadyMix*  25 
xGen Library Amplification Primer  1.25 
Nuclease-Free Water  3.75 
> * If using a PCR master mix other than Kapa HiFi, the magnesium concentration may need to be optimized for on-bead
> PCR.
3.  Place the tube in a thermal cycler, and run the following program with the heated lid set at 
105°C: 
Step  Number of cycles  Temperature (°C)  Time 
Polymerase activation  1 98  45 sec 
Amplification 
Denaturation 
Annealing 
Extension 
Variable—refer to the 
Panel table below. 
98 
60 
72 
15 sec 
30 sec 
30 sec 
Final extension  1 72  1 min 
Hold  1 4 Hold 
Note:  The number of PCR cycles should be optimized per panel size and the 
number of pooled libraries per capture, to ensure there is enough yield for 
sequencing. 
We recommend starting optimization with the following: 
Panel size  1-plex  4-plex  8-plex  12-plex 
>100,000 probes (xGen Exome)  10 cycles  8 cycles  7 cycles  6 cycles 
10,000–100,000 probes  12 cycles  10 cycles  9 cycles  8 cycles 
500–10,000 probes  13 cycles  11 cycles  10 cycles  10 cycles 
1–500 probes  14 cycles  12 cycles  11 cycles  11 cycles 
Optional stopping point.  Amplified captures may be stored at 4°C overnight. xGen hybridization capture of DNA libraries for NGS target enrichment 29   
> Tube protocol |Purify post-capture PCR fragments
## Purify post-capture PCR fragments 
Important!  Ensure Agencourt AMPure XP beads have been equilibrated to room 
temperature before proceeding. 
1.  Prepare 250 μL of fresh 80% ethanol per sample, multiplied by the number of samples with 
a 10% overfill. 
2.  Add 75 μL (1.5X volume) of Agencourt AMPure XP beads to each amplified capture (transfer 
to a larger 1.7 mL tube, if needed). 
3.  After adding the beads, mix thoroughly and incubate for 5–10 min. 
4.  Place the sample tube on a magnet until the supernatant is clear (2–5 min). 
5.  Remove supernatant without disturbing the beads. 
6.  While keeping the tube on the magnet, add 125 μL of 80% ethanol, then incubate for 
1 min. 
7.  Remove the ethanol, then repeat another ethanol wash. 
8.  Allow the beads to air dry for 1–3 min. Do not overdry the beads. 
9.  Remove the sample tube from the magnet and elute in 22 μL of Buffer EB, or equivalent 
(10mM Tris-Cl, pH 8.5). Mix thoroughly. Alternatively, TE can be used. 
10.  Incubate for 5 min at room temperature. 
11.  Place the tube on a magnet until the supernatant is clear (1–2 min). 
12.  Transfer 20 μL of eluate to a fresh tube making sure that no beads are carried over. 
Optional stopping point.  Purified PCR fragments may be stored at –20°C for up to 
1 week. xGen hybridization capture of DNA libraries for NGS target enrichment 30   
> Tube protocol |Validate and quantify library
## Validate and quantify library 
1.  Measure the concentration of the captured library using a fluorescence-based method for 
DNA quantitation (such as Qubit dsDNA HS Assay kit) or qPCR. 
Note:  Knowing the concentration of your captured library helps ensure your library is 
within the detection limits of the chip or tape (as measured in  step 2 , below) for use 
on your digital electrophoresis system. 
2.  Measure the average fragment length of the captured library on a digital electrophoresis 
system (e.g., the BioRad Experion ™ System using a DNA 1K chip, the Agilent 2100 
Bioanalyzer using a high sensitivity DNA chip, or the Agilent 2200 TapeStation system using 
a DNA tape or other similar system). 
## Perform sequencing 
Perform sequencing according to the instructions for your Illumina instrument. xGen hybridization capture of DNA libraries for NGS target enrichment 31   
> Appendix A |AMPure XP Bead DNA concentration protocol (Optional)
# Appendix A 
## AMPure XP Bead DNA concentration protocol (Optional) 
Important!  This protocol requires 7.5 μL of Human Cot DNA. To order additional Cot DNA, 
go to the  Cot DNA ordering page .
1.  Add 500 ng of library to the sample well. If multiplexing, pool 500 ng of each library into the 
sample well (maximum of 12 samples). 
Note:  This could be a large volume requiring either 1.7 mL tubes, or a deep well 
plate. 
2.  Add 7.5 μL of Human Cot DNA. 
3.  Add 1.8X volume of AMPure XP beads. 
4.  If using plates, securely seal the plate with a Microseal B seal. 
5.  Vortex thoroughly to mix. If using plates, adjust the settings to prevent any splashing onto 
the seal. 
6.  Incubate for 10 min at room temperature. 
7.  Incubate the plate or tube on the magnet for at least 2 min or until supernatant is clear. 
8.  Remove and discard the supernatant. Keeping the tube on the magnet, add 80% ethanol to 
cover the surface of the beads. Incubate for 30 sec without disturbing the beads. 
9.  Remove and discard the supernatant, then repeat another ethanol wash. 
10.  Allow the beads to air dry for approximately 2 min. Do not overdry. 
11.  Add these components to the tube to make the Hybridization Reaction Mix: 
Hybridization Reaction Mix components  Volume per reaction (μL)     
> xGen 2X Hybridization Buffer 9.5
> xGen Hybridization Buffer Enhancer 3
> xGen Blocking Oligos based on your library adapter 2
> xGen Lockdown Panels or custom probes 4.5
Total  19 
Note:  The Hybridization Reaction Mix elutes the DNA from the AMPureXP beads. 
12.  Vortex to mix. Ensure that the beads are fully resuspended. 
13.  Incubate for 5 min at room temperature. 
14.  After incubation, place on a magnet for 5–10 min or until the supernatant is clear. xGen hybridization capture of DNA libraries for NGS target enrichment 32   
> Appendix A |AMPure XP Bead DNA concentration protocol (Optional)
15.  Transfer 17 μL of the supernatant to the sample plate, or tube, where the hybridization 
will occur. 
Important!  Make sure to avoid bead carryover during the transfer process. 
Proceed to  Perform hybridization reaction  step 13, page 12  for plate captures, or 
step 8, page 2 3 for tube captures i mmediately after the sample DNA is ready. xGen hybridization capture of DNA libraries for NGS target enrichment 33 
Appendix B  | Combining xGen Lockdown Panels and Probes 
# Appendix B 
## Combining xGen Lockdown Panels and Probes 
Combine panels at equimolar amounts to achieve uniform coverage. When combining panels 
(during  Perform hybridization reaction ), prepare the Hybridization Master Mix based on the 
recommendations in Table 1. Multiply by the number of samples, then add a 10% overfill 
(See  Table 2 ). 
Tip:  For more information or assistance with your specific experimental design, contact our 
technical support group at  applicationsupport@idtdna.com .
> Table 1. Spike-in volumes when combining two panels
Spike-in panel types 
Gene 
Capture Pools 
Lockdown 
Probe Panel 
≥4000 probes 
Lockdown 
Probe Panel 
<4000 probes 
xGen 
Spike-in panel* 
Volume  Volume  Volume  Volume 
Panel  Spike-in  Panel  Spike-in  Panel  Spike-in  Panel  Spike-in 
> Main panel types
Gene Capture 
Pools  3 μL  3 μL  4 μL  2 μL  4 μL  1 μL  4 μL  2 μL 
Lockdown 
Probe Panel 
≥4000 probes 
N/A  N/A  3 μL  3 μL  4 μL  2 μL  4 μL  2 μL 
Lockdown 
Probe Panel 
<4000 probes 
N/A  N/A  N/A  N/A  3 μL  3 μL  4 μL  2 μL 
> * Inventoried spike-in panels (e.g., xGen CNV Backbone Panel—Tech Access, Human mtDNA Research Panel, or Human ID Panel)
> Table 2. Volumes per component of the Hybridization Master Mix
Hybridization Master Mix components  Volume per reaction (μL) 
xGen 2X Hybridization Buffer  8.5 
xGen Hybridization Buffer Enhancer  2.7 
Main panel  See  Table 1 
Spike-in panel  See  Table 1 
Nuclease-Free Water  0–0.8 (only if needed*) 
Total volume*  17–17.2 μL 
> * Depending on the spike-in panel used, your volume could be less than 17 μL; if so, add a small amount of water to reach the total
> recommended volume (17–17.2 μL).
custom oligos • qPCR • next generation sequencing • RNAi • genes & gene fragments • CRISPR genome editing 
## xGen hybridization capture of DNA libraries applicationsupport@idtdna.com Technical support:  
> For Research Use Only.
> © 2019 Integrated DNA Technologies, Inc. All rights reserved. Lockdown and xGen are trademarks of
> Integrated DNA Technologies, Inc., and registered in the USA. All other marks are the property of their
> respective owners. For specific trademark and licensing information, see www.idtdna.com/trademarks .
> NGS-10122-PR 05/2019
Integrated DNA Technologies, Inc. (IDT) is your Advocate for the Genomics Age. For more 
than 30 years, IDT’s innovative tools and solutions for genomics applications have been 
driving advances that inspire scientists to dream big and achieve their next breakthroughs. 
IDT develops, manufactures, and markets nucleic acid products that support the life sciences 
industry in the areas of academic and commercial research, agriculture, medical diagnostics, 
and pharmaceutical development. We have a global reach with personalized customer 
service. See what more we can do for  you  at  www.idtdna.com .