# KAPA HyperPrep Kit Technical Data Sheet
URL: https://rochesequencingstore.com/wp-content/uploads/2022/07/KAPA-HyperPrep-Kit-Technical-Data-Sheet.pdf
Technical Data Sheet 
Effective date: August 2019  For Research Use Only. Not for use in diagnostic procedures. KAPA HyperPrep Kit 
KR0961 – v7.19 
This Technical Data Sheet provides product information 
and a detailed protocol for the KAPA HyperPrep Kit. 
This document applies to the KAPA HyperPrep Kits 
(07962312001, 07962347001 and 07962363001), and 
to the KAPA HyperPrep Kits for PCR-free workflows 
(07962339001, 07962355001 and 07962371001). 
Kapa/ Roche  Kit Codes and Components 
KK8500 
> 07962312001
KK8501 *
> 07962339001
8 libraries 
End Repair & A-Tailing Buffer 
End Repair & A-Tailing Enzyme 
Ligation Buffer 
DNA Ligase 
KAPA HiFi HotStart ReadyMix (2X)* 
Library Amplification Primer Mix (10X)* 
60  μL 
25  μL 
245  μL 
80  μL 
250  μL 
50  μL 
KK8502 
> 07962347001
KK8503 *
> 07962355001
24 libraries 
End Repair & A-Tailing Buffer 
End Repair & A-Tailing Enzyme 
Ligation Buffer 
DNA Ligase 
KAPA HiFi HotStart ReadyMix (2X)* 
Library Amplification Primer Mix (10X)* 
210  μL 
90  μL 
900  μL 
300  μL 
690  μL 
138  μL 
KK8504 
> 07962363001
KK8505 *
> 07962371001
96 libraries 
End Repair & A-Tailing Buffer 
End Repair & A-Tailing Enzyme 
Ligation Buffer 
DNA Ligase 
KAPA HiFi HotStart ReadyMix (2X)* 
Library Amplification Primer Mix (10X)* 
930  μL 
400  μL 
3.8 mL 
1.26 mL 
3.0 mL 
600  μL        
> *07962339001, 07962355001 and 07962371001 are available for PCR-free
> workflows, and do not contain library amplification reagents.
Quick Notes 
• This kit provides a versatile, streamlined DNA 
library construction protocol. Libraries for Illumina ®
sequencing may be prepared from a wide range 
of DNA samples and inputs (1  ng  – 1 μg) in 
2 – 3 hrs, with minimal hands-on time. DNA input 
is appropriately fragmented double-stranded DNA. 
• The one-tube chemistry improves library yield and 
quality, particuarly for FFPE and low-input samples. 
• The protocol is easy to automate. Generous 
reagent excesses are supplied in 96-reaction kits 
to accommodate the dead volumes required for 
automated liquid handling. 
• Kits contain all the reagents for library construction 
and high-efficiency, low-bias library amplification, 
except for adapters and beads. KAPA HyperPure 
Beads or KAPA Pure Beads (jointly referred to 
hereafter as KAPA cleanup beads) and KAPA Unique 
Dual-Indexed Adapters are recommended and 
are sold separately. Kits without an amplification 
module are available for PCR-free workflows. 
• The  Process Workflow  provides an overview of the 
library construction process.  Appendix  1 provides 
protocols for bead-based, double-sided size 
selection. 
## Contents 
Product Description  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Product Applications  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Product Specifications  . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Shipping and Storage  . . . . . . . . . . . . . . . . . . . . . . . .  2
Handling  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Quality Control  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Important Parameters  . . . . . . . . . . . . . . . . . . . . . . . . . . .  3
Automated Library Construction  . . . . . . . . . . . . . . . .  3
Safe Stopping Points  . . . . . . . . . . . . . . . . . . . . . . . . .  4
Input DNA and Fragmentation  . . . . . . . . . . . . . . . . . .  4
Adapter Design and Concentration  . . . . . . . . . . . . . .  5
Post-ligation Processing  . . . . . . . . . . . . . . . . . . . . . .  6
Reaction Cleanups  . . . . . . . . . . . . . . . . . . . . . . . . . . .  6
Size Selection  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  7
Library Amplification . . . . . . . . . . . . . . . . . . . . . . . . . .  7
Evaluating the Success of Library Construction  . . . .  9
Process Workflow  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  11 
Recommended QC Metrics  . . . . . . . . . . . . . . . . . . .  11 
Library Construction Protocol  . . . . . . . . . . . . . . . . . . . .  12 
Appendix 1: Size Selection  . . . . . . . . . . . . . . . . . . . . . .  14 
Restrictions and Liabilities . . . . . . . . . . . . . . . . . . . . . . .  16 
Note to Purchaser: Limited Product Warranty  . . . . . . .  16 
Note to Purchaser: Limited License  . . . . . . . . . . . . . . .  16 Technical Data Sheet KAPA HyperPrep Kit 2 For Research Use Only. Not for use in diagnostic procedures. 
## Product Description 
The KAPA HyperPrep Kit provides a versatile, streamlined 
protocol for the rapid construction of libraries for Illumina 
sequencing from fragmented, double-stranded DNA 
(dsDNA). The chemistry and streamlined, one-tube 
protocol improves the efficiency and consistency of library 
construction across a wide range of sample types and inputs. 
The workflow combines enzymatic steps and employs 
minimal bead-based cleanups, thereby reducing sample 
handling and overall library preparation time to 2  – 3 hrs. 
The kit contains all of the enzymes and reaction buffers 
required for:               
> 1. end repair and A-tailing, which produces end-repaired,
> 5'-phosphorylated, 3'-dA-tailed dsDNA fragments;
> 2. adapter ligation, during which dsDNA adapters with 3'-dTMP
> overhangs are ligated to 3'-dA-tailed molecules;
> 3. library amplification (optional), which employs high-
> fidelity, low-bias PCR to amplify library fragments carrying
> appropriate adapter sequences on both ends.
The kit provides a single, concentrated buffer and a single 
enzyme mixture for each of the two library construction 
steps. This offers the best combination of product stability, 
convenience and efficiency. Adapters and beads required 
for cleanups after adapter ligation and library amplification 
are not included. KAPA cleanup beads and KAPA Adapters 
are sold separately. 
In order to maximize sequence coverage uniformity, 
it is critical to minimize library amplification bias. 
KAPA HiFi DNA Polymerase is designed for low-bias, 
high-fidelity PCR, and is the reagent of choice for NGS 
library amplification. 1,2,3,4  KAPA HyperPrep Kits include 
KAPA HiFi HotStart ReadyMix  (2X), a ready-to-use PCR mix 
comprising all the components for library amplification— 
except primers and template. Kits also include 
KAPA Library Amplification Primer Mix  (10X), designed for 
the high-efficiency amplification of Illumina libraries flanked 
by adapters containing the P5 and P7 flow cell sequences. 
Kits without the amplification module (07962339001, 
07962355001 and 07962371001) are available for 
PCR-free workflows. They may also be combined with 
KAPA HiFi HotStart Real-Time Library Amplification 
Kit (07959028001), or with KAPA HiFi HotStart Uracil+ 
ReadyMix Kits (07959052001 and 07959079001) for the 
amplification of bisulfite-converted libraries.             
> 1. Oyola, S.O., et al., BMC Genomics 13 , 1 (2012).
> 2. Quail, M.A., et al., Nature Methods 9, 10 (2012).
> 3. Quail, M.A., et al., BMC Genomics 13 , 341 (2012).
> 4. Ross, M.G., et al., Genome Biology 14 , R51 (2013).
## Product Applications 
KAPA HyperPrep Kits are ideally suited for low- and 
high-throughput NGS library construction workflows that 
require end repair, A-tailing, adapter ligation and library 
amplification (optional). Kits are designed for library 
construction from a wide range of sample types and 
inputs (1  ng  – 1 μg), and are compatible with complex 
genomic DNA, cell-free/circulating tumor DNA and low-
quality DNA such as FFPE samples. For small genomes, 
cell-free/circulating tumor DNA and lower complexity 
samples such as ChIP DNA, amplicons or cDNA (for RNA-
seq), library construction from lower inputs (~100  pg or 
more) may be attempted. 
The protocol is automation-friendly and may be 
incorporated into workflows for a wide range of NGS 
applications, including:      
> •whole-genome, shotgun sequencing
> •whole exome or targeted sequencing, using SeqCap EZ,
> Agilent SureSelect, Illumina TruSeq, or IDT xGen Lockdown
> Probes, or other hybridization capture systems
> •ChIP-seq
> •RNA-seq (starting with cDNA)
> •methyl-seq (in combination with KAPA HiFi HotStart Uracil+
> ReadyMix for library amplification).
## Product Specifications 
Shipping and Storage 
The enzymes provided in this kit are temperature sensitive, 
and appropriate care should be taken during shipping and 
storage. KAPA HyperPrep Kits are shipped on dry ice or 
ice packs, depending on the destination country. Upon 
receipt, immediately store enzymes and reaction buffers 
at -15°C  to  -25°C in a constant-temperature freezer. When 
stored under these conditions and handled correctly, the 
kit components will retain full activity until the expiry date 
indicated on the kit label. 
Handling 
Always ensure that KAPA HyperPrep Kit components 
have been fully thawed and thoroughly mixed before use. 
The KAPA HyperPrep End Repair & A-tailing Buffer and 
Ligation Buffer may contain precipitates when thawed at 
+2°C to +8°C. These buffers must be thawed at room 
temperature and vortexed thoroughly before use. KAPA 
HiFi HotStart ReadyMix  (2X) contains isostabilizers 
and may not freeze completely, even when stored at 
-15°C  to  -25°C. Nevertheless, always ensure that the 
ReadyMix is fully thawed and thoroughly mixed before 
use. Reaction master mixes prepared from the enzymes 
and buffers for end repair and A-tailing, as well as for 
ligation, are very viscous and require special attention 
during pipetting. Keep all enzyme components and 
master mixes on ice as long as possible during handling 
and preparation. 
Quality Control 
All kit components are subjected to stringent functional 
quality control, are free of detectable contaminating exo-
and endonuclease activities, and meet strict requirements 
with respect to DNA contamination. 
Please contact Technical Support at 
sequencing.roche.com/support  for more information. Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  3
## Important Parameters 
Library construction workflows must be tailored and 
optimized to accommodate specific experimental 
designs, sample characteristics, sequencing applications 
and equipment. The protocol provided in this document 
is generic, and reaction parameters may be adjusted as 
required to optimize performance, efficiency and cost-
effectiveness. 
In addition to the information in this section, 
please consult the  KAPA NGS Library Preparation 
Technical Guide  (available from Technical Support at 
sequencing.roche.com/support ) for further guidelines when 
designing or optimizing your library construction workflow. 
Automated Library Construction 
The library construction protocol described in this 
document is designed to be “automation-friendly” and can 
be performed manually, or in a semi- or fully-automated 
fashion using a suitable automated liquid handling 
platform. In addition to increased sample throughput, 
automation may be expected to provide additional 
advantages such as improved reproducibility and process 
control. However, automation may result in slightly lower 
yields and/or different size distributions when compared 
with manual library construction performed by a skilled, 
experienced and attentive technician. Most often, these 
discrepancies can be minimized through careful selection 
of hardware and plasticware, and optimization of liquid 
handling parameters. 
Kapa Biosystems does not supply automated liquid 
handling equipment, but collaborates with automation 
solution providers and customers to develop and 
qualify optimized automated methods for our kits, for 
liquid handling platforms routinely used in NGS library 
construction. Please contact your instrument vendor or 
Technical Support at  sequencing.roche.com/support  if 
you are interested in using the KAPA HyperPrep Kit with 
your particular automated liquid handling system. 
When attempting to develop an automated 
KAPA HyperPrep method, please keep the following in 
mind: 
• Reaction components for enzymatic reactions should 
be combined into master mixes, rather than dispensed 
separately. Master mixes are stable for ≤24  hrs at room 
temperature, and do not have to be actively cooled 
during automated library construction. 
• Master mixes for the end repair and A-tailing reaction, 
as well as for adapter ligation are highly viscous, and 
require careful optimization of pipetting parameters. 
• Due to the strong 3' g5' exonuclease activity of 
KAPA HiFi HotStart DNA Polymerase, PCR master 
mixes containing primers should preferably not be left 
on-deck for long periods of time, particulary if they are 
not actively cooled. Prepare library amplification master 
mixes freshly before use, or dispense primer mixes 
separately from the KAPA HiFi HotStart ReadyMix. 
Since an excess (5  – 20%) of each reagent master 
mix will be required, generous reagent overages are 
included in 96-reaction kits. The appropriate excess 
for other reagents (adapters, beads, 80% ethanol and 
elution buffer) varies from one liquid handling system 
to another. 
• Incubations at temperatures above 50°C must be 
performed in a thermocycler with a heated lid. 
• This protocol has been optimized with 96-well PCR 
plates with a maximum working volume of ~200  μL. 
Plates with larger working volumes or deep-well plates 
may be used to accommodate larger reaction volumes 
if needed. 
• Always use plastics that are certified to be nuclease-
free. Low DNA-binding plastics are recommended. 
When selecting the most appropriate plasticware for 
your workflow, consider compatibility with:          
> -the plate gripper and other components of your liquid
> handling system;
> -the magnet used during bead manipulations; and
> -Peltier devices or thermocyclers used for reaction
> incubations and/or library amplification.
• Design automated methods in a manner that ensures 
the highest consistency across all 12 columns of 
96-well working plates, and eliminates all possible 
sources of sample-to-sample and environmental 
contamination. Consider performing pre- and post-
PCR steps on dedicated instruments, if available. Technical Data Sheet KAPA HyperPrep Kit 4 For Research Use Only. Not for use in diagnostic procedures. 
Safe Stopping Points 
The library construction process, from end repair and 
A-tailing to final, amplified library can be performed in 
2 – 3 hrs—depending on experience, the number of 
samples being processed, and whether or not library 
amplification is performed. If necessary, the protocol may 
be safely paused after completion of the  Post-ligation 
Cleanup  (step  3.17). 
Purified, adapter-ligated library DNA may be stored at 
+2°C to +8°C for 1  – 2 weeks, or at -15°C to -25°C for 
≤1 month before amplification, target capture and/or 
sequencing. Library amplification products may be stored 
in a similar way, but the post-amplification cleanup should 
be performed as soon as possible. To avoid degradation, 
always store DNA in a buffered solution (10  mM Tris-HCl, 
pH  8.0  – 8.5) when possible, and minimize the number of 
freeze-thaw cycles. 
Input DNA and Fragmentation 
• This protocol is suitable for library construction from 
1 ng  – 1 μg of appropriately fragmented double-
stranded DNA. However, libraries can be prepared 
from lower input amounts if the sample copy number 
is sufficient to ensure the requisite coverage and 
complexity in the final library. Please refer to Table  1
for recommended inputs of different types of DNA, for 
different sequencing applications.                                         
> Table 1. Recommended inputs into library construction
> Application Sample type Recommended
> input
> WGS Complex gDNA
> (high quality) 50 ng –1μg
> Target capture
> (WES, custom
> panels)
> Complex gDNA
> (high quality) 10 ng –1μg
> WGS, target capture FFPE DNA
> ≥50 ng
> (quality
> dependent)
> WGS, target capture Cell-free/circulating
> tumor DNA ≥100 pg
> WGS Microbial DNA 1ng –1μg
> WGS (PCR-free) High-quality DNA ≥50 ng (no SS)*
> ≥200 ng (w/SS)*
> ChIP-seq ChIP DNA ≥100 pg
> Targeted sequencing Amplicons ≥100 pg
> RNA-seq cDNA ≥1 ng
> * SS = size selection; results in the loss of 60 –95% of DNA, irrespective of whether
> a bead- or gel-based technique is used.
• “Input” typically refers to the input into the end repair 
and A-tailing reaction. If DNA was quantified before 
fragmentation, and/or fragmented DNA was subjected 
to cleanup or size selection prior to end repair and 
A-tailing, the actual input into library construction may 
be significantly lower. This should be taken into account 
when evaluating the efficiency of the process and/or 
during optimization of library amplification cycle number. 
• The proportion of fragmented DNA that is successfully 
converted to adapter-ligated molecules decreases as 
input is reduced. When starting library construction 
with >100  ng fragmented DNA, 25  – 50% of input DNA 
is typically converted to adapter-ligated molecules, 
whereas conversion rates range between 1% and 25% 
for libraries constructed from 100  pg  – 100  ng DNA. 
These figures apply to high-quality DNA, and may be 
lower for DNA of lower quality, e.g., FFPE samples. 
Workflows with additional bead-based cleanups or size 
selection prior to adapter ligation are likely to result in a 
lower yield of adapter-ligated molecules. 
• DNA preparations containing high concentrations of 
EDTA, other chelating agents or salts may inhibit the 
end repair and A-tailing reaction. If fragmented DNA 
is not subjected to a bead-based cleanup or size 
selection prior to library construction, DNA should be 
fragmented in 10  mM Tris-HCl (pH  8.0  – 8.5)  + 0.1  mM 
EDTA. Fragmentation in water is not recommended. 
For DNA cleanup protocols please refer to the relevant 
Technical Data Sheet  (KR1705 or KR1245). 
• The KAPA HyperPrep Kit is compatible with all 
mechanical and enzymatic fragmentation methods 
that are commonly used in NGS library construction 
workflows, except for tagmentation. Please refer to the 
fragmentation guidelines provided by the manufacturer 
of your fragmentation equipment or reagent of choice. 
The KAPA Frag Kit for Enzymatic Fragmentation is 
highly recommended, particularly if you prefer not 
to use mechanical shearing, or do not have access 
to specialized equipment. KAPA HyperPlus Library 
Preparation Kits combine the KAPA Frag and the 
KAPA HyperPrep chemistries in a streamlined, one-
tube fragmentation/library construction protocol that 
offers the highest library yields from your available 
sample. Please visit  sequencing.roche.com  for more 
information. Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  5
Adapter Design and Concentration 
• KAPA Adapters are recommended for use with 
the KAPA HyperPrep Kit. However, the kit is also 
compatible with other full-length adapter designs 
wherein both the sequencing and cluster generation 
sequences are added during the ligation step, 
such as those routinely used in SeqCap EZ, TruSeq 
(Illumina) and SureSelect XT2 (Agilent) kits, and 
other similar library construction workflows. Custom 
adapters that are of similar design and are compatible 
with “TA-ligation” of dsDNA may also be used, 
remembering that custom adapter designs may 
impact library construction efficiency. For assistance 
with adapter compatibility and ordering, please visit 
sequencing.roche.com/support .
• Adapter concentration affects ligation efficiency, 
as well as adapter and adapter-dimer carry-over 
during the post-ligation cleanup. The optimal 
adapter concentration for your workflow represents a 
compromise between the above factors and cost. 
• Ligation efficiency is robust for adapter:insert 
molar ratios ranging from 10:1  to  >200:1, making it 
unnecessary to adjust adapter stock concentrations 
to accommmodate moderate variations in DNA input 
or fragment length. Please refer to Table  2 for the 
recommended adapter concentrations for different 
DNA inputs. 
• High adapter:insert molar ratios (>200:1) are beneficial for 
low-input applications. When optimizing workflows for 
DNA inputs ≤25  ng, two or three adapter concentrations 
should be evaluated: try the recommended adapter 
concentration (Table  2), as well as one or two additional 
concentrations in a range that is 2  – 10 times higher 
than the recommended concentration. 
• Adapter quality has an impact on the effective 
concentration of adapter available for ligation. Always 
source the highest quality adapters from a reliable 
supplier, dilute and store adapters in a buffered solution 
with the requisite ionic strength, and avoid excessive 
freezing and thawing of adapter stock solutions. 
• To accommodate different adapter concentrations 
within a batch of samples processed together, it is best 
to vary the concentrations of adapter stock solutions, 
and dispense a fixed volume (5  μL) of each adapter. 
The alternative (using a single stock solution, and 
dispensing variable volumes of adapter into ligation 
reactions) is not recommended. 
Table  2. Recommended adapter concentrations for libraries constructed from 1  ng  – 1 μg input DNA* 
Fragmented DNA 
per 50  μL 
ER & AT reaction 
Adapter stock 
concentration 
Adapter:insert 
molar ratio 
Fragmented DNA 
per 50  μL 
ER & AT reaction 
Adapter stock 
concentration 
Adapter:insert 
molar ratio 
1 μg  15 μM  10:1  25  ng  7.5 μM  200:1 
500  ng  15 μM  20:1  10  ng  3 μM  200:1 
250  ng  15 μM  40:1  5 ng  1.5 μM  200:1 
100  ng  15 μM  100:1  2.5  ng  750  nM  200:1 
50  ng  15 μM  200:1  1 ng  300  nM  200:1    
> * Adapter:insert molar ratio calculations are based on a mode DNA fragment length of 200 bp, and will be higher for longer DNA fragments, or slightly lower for DNA fragmented
> to a mode size <200 bp. The lower adapter:insert molar ratios recommended for inputs >100 ng represent a fair compromise between library construction efficiency and cost;
> higher library yields will be achieved if a higher adapter concentration is used.
# Technical Data Sheet KAPA HyperPrep Kit 6 For Research Use Only. Not for use in diagnostic procedures. 
Post-ligation Processing 
• It is important to remove unligated adapter and/or 
adapter-dimer molecules from the library prior to library 
amplification or cluster generation. 
• The KAPA HyperPrep chemistry reduces adapter-
dimer formation, and enables efficient elimination 
of unused adapter and adapter-dimer with a single 
post-ligation cleanup. The optimal bead to DNA ratio 
for libraries prepared from fragmented dsDNA with a 
mode fragment length in the range of 150  – 350  bp 
is 0.8X. This ratio may be modified to accommodate 
libraries prepared from longer DNA fragments, or to 
shift the mode fragment length of the population of 
adapter-ligated molecules. 
• The volume in which washed beads are resuspended 
after the post-ligation cleanup should be adjusted to 
suit your chosen workflow: 
- If proceeding directly to library amplification, 
determine an appropriate final volume in which 
to elute the library DNA, keeping in mind that you 
may wish to divert and/or reserve some of this 
library material for archiving and/or QC purposes. 
Since a 50  μL library amplification reaction can 
accommodate 20  – 24  μL template DNA, an elution 
volume of ~25  μL is recommended. 
- If proceeding with size selection, elute the library 
DNA in a volume appropriate for the size selection 
method of choice. For the double-sided size selection 
protocol described in the  Appendix  1, beads must 
be resuspended in 55  μL of elution buffer. 
• A second post-ligation cleanup (using a 1X or different 
bead to DNA ratio) may be performed if post-ligation 
or post-amplification analysis reveals unacceptable 
levels of adapter and/or adapter-dimer carry-over 
after the first cleanup. A second cleanup may be 
particularly beneficial when libraries are prepared in 
PCR-free workflows for direct sequencing on Illumina 
instruments that employ patterned flow cells. The 
sample volume should be adjusted (with elution buffer) 
to at least 50  μL for a second post-ligation cleanup. 
The adapter concentration may also be optimized to 
eliminate the carry-over of adapter and/or adapter-
dimer (and obviate the need for a second post-
ligation cleanup). However, keep in mind that library 
construction is most efficient when high adapter:insert 
molar ratios are used. 
Reaction Cleanups 
• This protocol has been validated for use with either 
KAPA cleanup beads or Agencourt ® AMPure ® XP 
(Beckman Coulter). Solutions and conditions for DNA 
binding and size selection may differ if other beads are 
used. 
• Observe all the storage and handling recommendations 
for KAPA cleanup beads or AMPure XP. Equilibration to 
room temperature is essential to achieve specified size 
distribution and yield of libraries. 
• Beads will settle gradually; always ensure that they are 
fully resuspended before use. 
• To ensure optimal DNA recovery, it is critical that the 
DNA and the KAPA cleanup beads are thoroughly 
mixed  (by vortexing or extensive up-and-down 
pipetting) before the DNA binding incubation. 
• Bead incubation times are guidelines only, and may be 
modified/optimized based on current protocols, previous 
experience, specific equipment and samples in order to 
maximize library construction efficiency and throughput. 
• The time required for complete capture of beads varies 
according to the reaction vessel and magnet used. 
It is important not to discard or transfer any beads with 
the removal or transfer of supernatant. Capture times 
should be optimized accordingly. 
• The volumes of 80% ethanol used for bead washes may 
be adjusted to accommodate smaller reaction vessels 
and/or limited pipetting capacity, but it is important 
that the beads are entirely submerged during the wash 
steps.  Always use freshly prepared 80% ethanol. 
• It is important to remove all ethanol before proceeding 
with subsequent reactions. However, over-drying of 
beads may make them difficult to resuspend, resulting 
in a dramatic loss of DNA. With optimized aspiration 
of ethanol, drying of beads for 3 – 5 min at room 
temperature should be sufficient.  Drying of beads at 
37°C is not recommended .
• Where appropriate, DNA should be eluted from beads 
in elution buffer (10  mM Tris-HCl, pH  8.0  – 8.5). Elution 
of DNA in PCR-grade water is not recommended, as 
DNA is unstable in unbuffered solutions. However, 
libraries constructed for hybridization target capture 
that requires drying of DNA prior to probe hybridization 
must be eluted and stored in PCR-grade water. 
Purified DNA in elution buffer should be stable at 2°C to 
8°C for 1  – 2 weeks, or at -15°C to -25°C for long-term 
storage. The long-term stability of library DNA at -15°C 
to -25°C depends on a number of factors, including 
library concentration. Always use low DNA-binding 
tubes for long-term storage, and avoid excessive 
freezing and thawing. Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  7
Size Selection 
• Size selection requirements vary widely for different 
sequencing applications. If required, any commonly 
used bead- or gel-based size selection technique may 
be integrated in the KAPA HyperPrep workflow. 
• Size selection may be carried out at several points in 
the overall workflow, for example: 
- prior to end repair and A-tailing of fragmented DNA; 
- after the post-ligation cleanup; or 
- after library amplification. 
• The standard protocol (pp.  11  – 12) does not include 
size selection. Please refer to  Appendix  1 for detailed 
double-sided size selection protocols. 
• Size selection inevitably leads to a loss of sample 
material. These losses can be dramatic (60  – 95%), and 
may significantly increase the number of amplification 
cycles required to generate sufficient material for the 
next step in the process (capture or sequencing). The 
potential advantages of one or more size selection 
steps in a library construction workflow should be 
weighed against the potential loss of library complexity, 
especially when input DNA is limited. A well-optimized 
fragmentation protocol, especially for shorter insert 
libraries and/or read lengths, may eliminate the need 
for size selection, thereby simplifying the library 
construction process and limiting sample losses. 
• The Ligation Buffer contains a high concentration of 
PEG  6000, which will interfere with efficient double-
sided size selection and can affect the efficiency of other 
size selection techniques if not removed. If size selection 
is performed after ligation, it is important to perform at 
least one bead-based cleanup prior to performing bead-
or electrophoresis-based size selection. 
• Over-amplification typically results in the observation 
of secondary, higher molecular weight peaks in the 
electrophoretic profiles of amplified libraries. These 
higher molecular weight peaks are artifacts of the 
analysis, and typically contain authentic library molecules 
of the appropriate length. To eliminate these artifacts, 
optimization of library amplification reaction parameters 
(cycle number and primer concentration), rather than 
post-amplification size selection, is recommended. 
Please refer to the next subsection for more information. 
Library Amplification 
• KAPA HiFi HotStart, the enzyme provided in the 
KAPA HiFi HotStart ReadyMix is an antibody-based 
hot start formulation of KAPA HiFi DNA Polymerase—a 
B-family DNA polymerase engineered for increased 
processivity and high fidelity. KAPA HiFi HotStart has 
5' g3' polymerase and 3' g5' exonuclease (proofreading) 
activity, but no 5' g3' exonuclease activity. The strong 
3' g5' exonuclease activity results in superior accuracy 
during DNA amplification. The error rate of KAPA HiFi 
HotStart is 2.8  x 10 -7  errors/base, equivalent to 1  error 
in 3.5  x 10 6 nucleotides incorporated. 
• The KAPA Library Amplification Primer Mix (10X) is 
designed to eliminate or delay primer depletion during 
library amplification reactions performed with KAPA 
HiFi HotStart ReadyMix. The primer mix is suitable for 
the amplification of all Illumina libraries flanked by the 
P5 and P7 flow cell sequences. Primers are supplied 
at a 10X concentration of 20  μM each, and have been 
formulated as described below. User-supplied primer 
mixes may be used in combination with incomplete or 
custom adapters. Please contact Technical Support at 
sequencing.roche.com/support  for guidelines on the 
formulation of user-supplied library amplification primers. 
• To achieve the highest amplification efficiency and 
avoid primer depletion, it is critical to use an optimal 
concentration of high-quality primers. Primers should 
be used at a final concentration of 0.5  – 4 μM each. 
For libraries constructed from ≥100  ng input DNA, a 
final concentration of at least 2  μM of each primer is 
recommended. 
• Library amplification primers should be HPLC-purified 
and modified to include a phosphorothioate bond at the 
3'-terminal of each primer (to prevent degradation by 
the strong proofreading activity of KAPA HiFi HotStart). 
Always store and dilute primers in a buffered solution 
(e.g., 10  mM Tris-HCl, pH  8.0  – 8.5), and limit the 
number of freeze-thaw cycles. To achieve the latter, 
store primers at 2°C to 8°C for short-term use, or as 
single-use aliquots at -15°C to -25°C. 
• In library amplification reactions (set up according 
to the recommended protocol), primers are typically 
depleted before dNTPs. When DNA synthesis can 
no longer take place due to substrate depletion, 
subsequent rounds of DNA denaturation and 
annealing result in the separation of complementary 
DNA strands, followed by imperfect annealing to non-
complementary partners. This presumably results in 
the formation of so-called “daisy-chains” or “tangled 
knots”, comprising large assemblies of improperly 
annealed, partially double-stranded, heteroduplex 
DNA. These species migrate slower and are observed 
as secondary, higher molecular weight peaks during the Technical Data Sheet KAPA HyperPrep Kit 8 For Research Use Only. Not for use in diagnostic procedures. 
electrophoretic analysis of amplified libraries. However, 
they typically comprise library molecules of the desired 
length, which are individualized during denaturation 
prior to cluster amplification or probe hybridization. 
Since these heteroduplexes contain significant portions 
of single-stranded DNA, over-amplification leads to the 
under-quantification of library molecules with assays 
employing dsDNA-binding dyes. qPCR-based library 
quantification methods, such as the KAPA Library 
Quantification assay, quantify DNA by denaturation 
and amplification, thereby providing an accurate 
measure of the amount of adapter-ligated molecules 
in a library—even if the library was over-amplified .
• Please refer to the  KAPA NGS Library Preparation 
Technical Guide  (available on request from Technical 
Support at  sequencing.roche.com/support ) for a more 
detailed discussion of factors that can affect the 
efficiency of library amplification, and the impact of 
over-amplification on library quantification. 
• Excessive library amplification can result in other 
unwanted artifacts such as amplification bias, PCR 
duplicates, chimeric library inserts and nucleotide 
substitutions. The extent of library amplification 
should therefore be limited as much as possible, 
while ensuring that sufficient material is generated for 
QC and downstream processing (e.g., target capture 
or sequencing). 
• If cycled to completion  (not recommended) , one 50  μL 
library amplification PCR, performed as described 
in the  Library Construction Protocol  (step  4), can 
produce 8  – 10  μg of amplified library. To minimize 
over-amplification and its associated, undesired 
artifacts, the number of amplification cycles should be 
tailored to produce the optimal amount of final library 
required for downstream processes. This is typically 
in the range of 250  ng  – 1.5  μg. Table  3 provides 
recommended cycle numbers for libraries prepared 
from high-quality input DNA, to obtain approximately 
100  ng or 1  μg of amplified library. 
• The quantification of adapter-ligated libraries (prior 
to library amplification) can greatly facilitate the 
optimization of library amplification parameters, 
particularly when a library construction workflow is first 
established. With the KAPA Library Quantification Kit, 
the amount of template DNA (adapter-ligated molecules) 
available for library amplification can be determined 
accurately. From there, the number of amplification 
cycles needed to achieve a specific yield of amplified 
library can be predicted theoretically. Please refer to 
Table  4 for the number of cycles recommended to 
obtain approximately 1  μg of DNA from 0.5  – 500  ng of 
adapter-ligated DNA, or contact Technical Support at 
sequencing.roche.com/support  regarding a calculator 
designed to assist with these calculations. Please note 
that the actual optimal number of amplification cycles 
may be 1  – 3 cycles higher or lower, depending on the 
sample type and size distribution of the input DNA. 
Table  3. Recommended cycle numbers to generate 100  ng or 
1 μg of amplified DNA from 1  ng  – 1 μg of input DNA 
Input DNA 
(into ER and AT) 
Number of cycles required to generate 
100  ng library  1 μg library 
1 μg  0*  1 – 2* 
500  ng  0*  2 – 4
250  ng  0 – 2*  4 – 6
100  ng  2 – 3*  6 – 7
50  ng  3 – 5 7 – 8
25  ng  5 – 7 8 – 10 
10  ng  7 – 9 11  – 13 
5 ng  9 – 11  13  – 14 
2.5  ng  11  – 13  14  – 16 
1 ng  13  – 15  17  – 19   
> * When using incomplete adapters, a minimum number of amplification cycles
> (1 –3) may be required to complete adapter sequences for the next step in the
> process (target capture or sequencing), irrespective of whether a sufficent amount
> of library is available after ligation. The number of cycles needed depends on the
> specific adapter and amplification primer design.
Table  4. Theoretical number of cycles required to obtain 
approximately 1  μg of amplified library DNA from 0.5  – 500  ng 
of adapter-ligated library DNA* 
Amount of adapter-
ligated DNA in 
amplification reaction 
Number of cycles required 
to generate 
1 μg of library DNA 
500  ng  1 – 2
100  ng  3 – 4
50  ng  5 – 6
10  ng  7 – 8
5 ng  8 – 9
1 ng  11  – 12 
500  pg  12  – 13 
> * Guidelines are based on amplification with KAPA HiFi HotStart ReadyMix and the
> KAPA Library Amplification Primer Mix, and library quantification with the qPCR-
> based KAPA Library Quantification Kit.
• Depending on the amount of library material required 
for your application, it may be possible to omit library 
amplification. In such cases, it is important to ensure that 
your adapters are designed to support sample indexing 
(where required), cluster amplification and sequencing. 
Omitting library amplification further streamlines the 
workflow and reduces overall library preparation time to 
<2  hrs. The high conversion efficiency achievable with 
the KAPA HyperPrep Kit enables PCR-free workflows 
from as little as 50  ng of input DNA. KAPA HyperPrep 
Kits without amplification reagents (07962339001, 
07962355001 and 07962371001) are available for 
PCR-free workflows. Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  9
Evaluating the Success of Library Construction 
• Your specific library construction workflow should be 
tailored and optimized to yield a sufficient amount 
of adapter-ligated molecules of the desired size 
distribution for the next step in the process (e.g., target 
capture or sequencing), as well as for library QC and 
archiving purposes. 
• The size distribution of pre-capture or final libraries 
should be confirmed with an electrophoretic method. 
A LabChip GX, GXII or GX Touch (PerkinElmer), 
Bioanalyzer or TapeStation (Agilent Technologies), 
Fragment Analyzer (Advanced Analytical) or similar 
instrument is recommended over conventional gels. 
Typical electrophoretic profiles for libraries prepared 
with the KAPA HyperPrep Kit are given in Figure  1 on 
the next page. 
• Please note that libraries prepared with “forked” 
adapters in PCR-free workflows will appear to have 
a longer than expected mode fragment length, and/ 
or may display a broad or bimodal size distribution 
when analyzed electrophoretically (see Figure  1). The 
difference in overall appearance and fragment size 
distribution of an unamplified vs. the corresponding 
amplified library varies, and depends on the adapter 
design and electrophoretic system used. To accurately 
determine the size distribution of an unamplified 
library, an aliquot of the library may be subjected to 
a few cycles of amplification prior to electrophoretic 
analysis, to ensure that all adapter-ligated molecules 
are fully double-stranded. Alternatively, size information 
may be obtained by electrophoretic analysis of 
library quantification products generated with the 
KAPA Library Quantification Kit (see below). 
• KAPA Library Quantification Kits for Illumina platforms 
are recommended for qPCR-based quantification 
of libraries. These kits employ primers based on the 
Illumina flow cell oligos, and can be used to quantify 
libraries that: 
- are ready for flow-cell amplification, and/or 
- were constructed with full-length adapters, once 
ligation has been completed, i.e., after the post-
ligation cleanup, after the (pre-capture) amplification 
cleanup, or before/after post-ligation or post-
amplification size selection. 
The KAPA Library Quantification Kit provides the only 
reliable means for quantifying libraries at different 
stages of the workflow, and libraries produced in PCR-
free workflows, as: 
- it only quantifies those molecules with two adapters 
in the correct orientation for cluster amplification 
and sequencing, and 
- measurements are not affected by library over-
amplification—see  Important Parameters: Library 
Amplification  (p.  6). 
• Once a library construction workflow has been 
optimized, and consistently yields the desired amount 
of amplified library of the requisite size distribution, 
it is typically not necessary to perform in-process 
quality control. However, qPCR-based quantification 
of libraries after the  Post-ligation Cleanup  (prior to 
Library Amplification ) can provide useful data for 
optimization or troubleshooting. Quantification at this 
stage allows you to assess the efficiency of: 
- the core library construction process (end 
repair, A-tailing and ligation), by determining the 
percentage of input DNA converted to adapter-
ligated molecules, and 
- library amplification with the selected number of 
cycles, based on the actual amount of template 
DNA used in the PCR. 
The availability of quantification data before and after 
library amplification allows the two major phases of 
the library construction process to be evaluated and 
optimized independently to achieve the desired yield 
of amplified library. 
• If size selection is performed at any stage, qPCR 
quantification before and after size selection may also 
be helpful to define the relative benefit of size selection, 
and to determine the loss of material associated with 
the process. 
• Electrophoretic evaluation of libraries after the post-
ligation cleanup/before library amplification may be 
informative, but remember that the apparent mode 
fragment length and size distribution will be inaccurate 
due to the retardation of non-complementary adapter 
regions, as outlined above and illustrated in Figure 1. Technical Data Sheet KAPA HyperPrep Kit 10  For Research Use Only. Not for use in diagnostic procedures. 
Figure 1. Examples of libraries prepared with the KAPA HyperPrep Kit 
Input DNA (100  ng high-quality human genomic DNA) was Covaris-sheared to a mode fragment size of ~200  bp (A) or ~300  bp (B), respectively. Libraries were prepared as 
described in the  Library Construction Protocol  (pp.  11  – 12), using the recommended adapter:insert molar ratio. Larger-insert libraries (B) were prepared in duplicate. One 
library was subjected to double-sided size selection after the post-ligation cleanup, as described in  Appendix 1 , whereas the other was not. Electropherograms were generated 
with a Bioanalyzer  2100 High Sensitivity DNA Kit. DNA concentrations were normalized prior to analysis and are not reflective of the actual DNA concentrations at different 
stages of the process. 
After ligation, the non-complementary ends of full-length, “forked” adapters retard the migration of library fragments in gel matrices, leading to a larger than expected size 
distribution. The difference between the actual and apparent mode fragment length of unamplified, adapter-ligated libraries depends on the adapter design and electrophoretic 
system used, and can be much more pronounced than observed here. Size selection results in a much narrower final library size distribution, but at the cost of a significant 
amount of library material. 
# A BFinal, amplified library 
Final, amplified library 
Final, amplified library 
(size selected) 
Fragmented 
DNA 
Fragmented 
DNA Post-ligation library  Post-ligation 
library Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  11 
An optional bead-based cleanup (1X  – 3X) 
and/or size selection may be inserted at 
this point, and may be required if DNA was 
sheared in a volume >50  μL, or in a buffer that 
is incompatible with end repair. 
Please refer to  Appendix  1 for 
detailed size selection protocols. 
See  Table  2 (p.  5) for recommended 
adapter stock concentrations. 
Library Amplification  (50  μL) 
(step  4) 
Post-amplification 
Cleanup  (50  μL) 
1X Bead-based Cleanup 
(step  5) 
Target Capture or Sequencing 
Fragmented dsDNA  (50  μL) 
End Repair and A-tailing  (60  μL) 
30  min at 20°C 
30  min at 65°C 
(step  1) 
Adapter Ligation  (110  μL) 
15  min at 20°C 
(step  2) 
Post-ligation Cleanup  (198  μL) 
0.8X Bead-based Cleanup 
(step  3) 
Concentration and Q-ratio of input DNA 
(KAPA hgDNA Quantification and QC Kit) 
for FFPE DNA only 
dsDNA sample 
Electrophoretic profile of fragmented DNA 
Actual quantity used for library construction 
(Qubit/PicoGreen) 
Concentration of adapter-ligated libraries 
(KAPA Library Quantification Kit) 
Adapter-ligated libraries diluted in the range 
of 1/500 to 1/10,000 usually fall within the 
dynamic range of the assay 
Electrophoretic profile of amplified libraries 
Concentration of amplified libraries 
(KAPA Library Quantification Kit) 
Amplified libraries diluted in the range of 
1/10,000 to 1/200,000 usually fall within the 
dynamic range of the assay 
Size selection—employing KAPA cleanup 
beads or an electrophoretic method—may be 
incorporated at this point, if appropriate. 
PCR-free workflows end here. 
Size selection—employing KAPA cleanup 
beads or an electrophoretic method—may be 
incorporated at this point, if appropriate. 
See  Table  1 (p.  4) for recommended inputs 
of different types of DNA for different 
sequencing applications. 
## Process Workflow 
Recommended QC Metrics Technical Data Sheet KAPA HyperPrep Kit 12  For Research Use Only. Not for use in diagnostic procedures. 
## Library Construction Protocol 
Note:  This protocol does not include size selection. 
Please refer to  Appendix 1  for detailed double-sided size 
selection protocols. 
1.  End Repair and A-tailing 
1.1  Assemble each end repair and A-tailing reaction in 
a tube or well of a PCR plate as follows: 
Component  Volume 
Fragmented, double-stranded DNA  50  μL 
End Repair & A-Tailing Buffer*  7 μL 
End Repair & A-Tailing Enzyme Mix*  3 μL 
Total volume:  60  μL    
> * The buffer and enzyme mix should preferably be pre-mixed and added
> in a single pipetting step. Premixes are stable for ≤24 hrs at room
> temperature, for ≤3 days at 2°C to 8°C, and for ≤4 weeks at -15°C to
> -25°C.
1.2  Vortex gently and spin down briefly. Return the 
plate/tube(s) to ice. Proceed immediately to the 
next step. 
1.3  Incubate in a thermocycler programmed as 
outlined below: 
Step  Temp  Time 
End repair 
and A-tailing 
20°C  30  min 
65°C*  30  min 
HOLD  4°C**  ∞           
> * A heated lid is required for this incubation. If possible, set the
> temperature of the lid at 85°C, instead of the usual ~105°C.
> **  If proceeding to the adapter ligation reaction setup without any delay,
> the reaction may be cooled to 20°C instead of 4°C.
1.4  Proceed immediately to  Adapter Ligation  (step  2). 
2.  Adapter Ligation 
2.1  Dilute adapter stocks to the appropriate 
concentration, as outlined in Table  2 (p.  5). 
2.2  In the same plate/tube(s) in which end repair and 
A-tailing was performed, assemble each adapter 
ligation reaction as follows: 
Component  Volume 
End repair and A-tailing reaction 
product  60  μL 
Adapter stock 
(concentration as required)  5 μL 
PCR-grade water*  5 μL 
Ligation Buffer*  30  μL 
DNA Ligase*  10  μL 
Total volume:  110  μL    
> * The water, buffer and ligase enzyme should preferably be premixed
> and added in a single pipetting step. Premixes are stable for ≤24 hrs
> at room temperature, for ≤3 days at 4°C, and for ≤4 weeks at -20°C.
2.3  Mix thoroughly and centrifuge briefly. 
2.4  Incubate at 20°C for 15  min. 
Note:  to achieve higher conversion rates and 
library yields, particularly for low-input samples, 
consider increasing the ligation time—to a
maximum of 4  hrs at 20°C, or overnight at 2°C 
to 8°C. Please note that longer ligation times 
may lead to increased levels of adapter-dimer. 
Adapter concentrations may have to be optimized 
if ligation times are extended significantly. 
2.5  Proceed immediately to the next step. 
3.  Post-ligation Cleanup 
3.1  In the same plate/tube(s), perform a 0.8X bead-
based cleanup by combining the following: 
Component  Volume 
Adapter ligation reaction product  110  μL 
KAPA cleanup beads  88  μL 
Total volume:  198  μL 
3.2  Mix thoroughly by vortexing and/or pipetting up 
and down multiple times. 
3.3  Incubate the plate/tube(s) at room temperature for 
5 – 15  min to bind DNA to the beads. 
3.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
3.5  Carefully remove and discard the supernatant. 
3.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
3.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
3.8  Carefully remove and discard the ethanol. 
3.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
3.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
3.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
3.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
3.13  Remove the plate/tube(s) from the magnet. 
3.14  Thoroughly resuspend the beads: 
• in 25  μL of elution buffer (10  mM Tris-HCl, 
pH  8.0  – 8.5) to proceed with  Library 
Amplification  (step  4), or 
• in 55  μL of elution buffer (10  mM Tris-HCl, 
pH  8.0  – 8.5) to proceed with double-sided 
size selection ( Appendix 1 ). Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  13 
3.15  Incubate the plate/tube(s) at room temperature for 
2 min to elute DNA off the beads. 
3.16  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
3.17  Transfer the clear supernatant to a new plate/tube(s): 
• to proceed with  Library Amplification  (step  4), 
transfer 20  μL of supernatant, or 
• to proceed with double-sided size selection 
(Appendix  1), transfer 50  μL of supernatant. 
4.  Library Amplification 
Note:  Please refer to  Important Parameters: 
Library Amplification  (pp. 6 – 7) and the 
KAPA NGS Library Preparation Technical Guide 
(available on request from  Technical Support at 
sequencing.roche.com/support ) for more 
information on optimizing library amplification. 
4.1  Assemble each library amplification reaction as 
follows: 
Component  Volume 
KAPA HiFi HotStart ReadyMix (2X)  25  μL 
KAPA Library Amplification 
Primer Mix (10X)*  5 μL 
Adapter-ligated library  20  μL 
Total volume:  50  μL                       
> * Or another, suitable 10X library amplification primer mix. The
> recommended final concentration of each primer in the library
> amplification reaction is 0.5 –4μM. Also refer to Important Parameters:
> Library Amplification (p. 6).
4.2  Mix thoroughly and centrifuge briefly. 
4.3  Amplify using the following cycling protocol: 
Step  Temp  Duration  Cycles 
Initial 
denaturation  98°C  45  sec  1
Denaturation  98°C  15  sec  Minimum 
number 
required 
for optimal 
amplification 
(Table 3  or  4)
Annealing*  60°C  30  sec 
Extension  72°C  30  sec 
Final 
extension  72°C  1 min  1
HOLD  4°C  ∞ 1
> * Optimization of the annealing temperature may be required for non-
> standard (i.e., other than Illumina TruSeq) adapter/primer combinations.
4.4  Proceed directly to  Post-amplification Cleanup 
(step  5). 
5.  Post-amplification Cleanup 
5.1  In the library amplification plate/tube(s) perform 
a 1X bead-based cleanup by combining the 
following: 
Component  Volume 
Library amplification reaction product  50  μL 
KAPA cleanup beads  50  μL 
Total volume:  100  μL 
5.2  Mix thoroughly by vortexing and/or pipetting up 
and down multiple times. 
5.3  Incubate the plate/tube(s) at room temperature for 
5 – 15  min to bind DNA to the beads. 
5.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
5.5  Carefully remove and discard the supernatant. 
5.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
5.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
5.8  Carefully remove and discard the ethanol. 
5.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
5.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
5.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
5.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
5.13  Remove the plate/tube(s) from the magnet. 
5.14  Thoroughly resuspend the beads in an appropriate 
volume of elution buffer (10  mM Tris-HCl, 
pH  8.0  – 8.5) or PCR-grade water. 
Note:  If proceeding with a second post-
amplification cleanup, or double-sided size 
selection ( Appendix  1), resuspend the beads in 
55  μL of elution buffer. 
5.15  Incubate the plate/tube(s) at room temperature for 
2 min to elute DNA off the beads. 
5.16  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
5.17  Transfer the clear supernatant to a new plate/tube(s) 
and proceed with size selection (refer to  Appendix  1), 
library QC, target capture or sequencing, as 
appropriate. Store purified, amplified libraries at 
+2°C to +8°C for 1  – 2 weeks, or at -15°C to -25°C 
for up to 3 months. Technical Data Sheet KAPA HyperPrep Kit 14  For Research Use Only. Not for use in diagnostic procedures. 
## Appendix 1: Size Selection 
Any commonly used size selection technique (e.g., the double-sided size selection described here, or an electrophoretic 
method) may be integrated into the KAPA HyperPrep library construction workflow. Size selection may be carried out at 
any one of several points in the workflow, for example: 
• prior to end repair and A-tailing of fragmented DNA; 
• after the post-ligation cleanup, or 
• after library amplification. 
Whether or not size selection is performed, which technique is used, and at what stage of the library construction process 
it is performed, depends on the nature of the sample, input into library construction, and the sequencing application and 
read length. For more information on size selection, refer to  Important Parameters: Size Selection .
The double-sided size selection protocols outlined in this  Appendix  are designed for the selection of DNA fragments 
(exclusive of adapter ) with a mode fragment length in the range of 150  – 350  bp. To obtain a population of shorter or longer 
molecules, protocols may be modified as follows: 
Upper size limit  Modification  Lower size limit  Modification 
Increase  Decrease the ratio of the first cut  Increase  Decrease the ratio of the second cut* 
Decrease  Increase the ratio of the first cut  Decrease  Increase the ratio of the second cut*      
> * The 2nd size cut should be performed with at least 0.2 volumes of KAPA cleanup beads. Please note that the volume of KAPA cleanup beads needed for the 2nd cut is
> calculated relative to the volume of the DNA at the start of the size selection procedure, not the volume of the DNA-containing supernatant transferred after the first
> cut. DNA recovery is dramatically reduced if the difference between 1st and 2nd cuts is less than ~0.2 volumes. To increase the amount of DNA recovered, >0.2 volumes of
> KAPA cleanup beads may be used for the second cut, but note that this may result in the recovery of smaller library fragments and/or a broader size distribution.
When size selecting adapter-ligated library DNA, keep in mind the long non-complementary arms of “forked” adapters 
ligated to DNA fragments affect size-dependent binding to KAPA cleanup beads, as well as the apparent fragment size 
determined with an electrophoretic method. For this reason, the double-sided size selection parameters for adapter-ligated 
libraries may have to be optimized to select for the appropriate size range. For more information on double-sided size 
selection, refer to the  KAPA NGS Library Preparation Technical Guide  (available on request from  Technical Support at 
sequencing.roche.com/support ). 
A1.  Double-sided Size Selection Protocol 
A1.1  Perform the first size cut (to exclude the unwanted, large DNA fragments or library molecules) by adding the 
appropriate volume of KAPA cleanup beads to the DNA, as follows: 
Component  Fragmented dsDNA in 50  μL 
(1.0X  – 1.2X) 
Fragmented dsDNA in 130  μL 
(1.0X  – 1.2X) 
Adapter-ligated 
or amplified DNA 
(0.7X  – 0.9X) *
DNA to be size-selected  50  μL  130  μL  50  μL 
KAPA cleanup beads  50  μL  130  μL  35  μL 
Total volume per well/tube:  100  μL  260  μL  85  μL  
> * For both adapter-ligated and amplified DNA, it is important to note that the adapters ligated to the insert DNA will increase the total fragment size by ~120 bp.
> For this reason, a lower ratio is required for the 1st cut.
A1.2  Mix thoroughly by vortexing and/or pipetting up and down multiple times. 
A1.3  Incubate the plate/tube(s) at room temperature for 5  – 15  min to bind the unwanted, large DNA fragments/library 
molecules to the beads. 
A1.4  Place the plate/tube(s) on a magnet to capture the beads. Incubate until the liquid is clear. 
A1.5  Carefully transfer the required volume of supernatant (containing DNA fragments/library molecules smaller than 
those that were intentionally excluded) to a new plate/tube(s) (see table in section A1.6). It is critical that no beads 
are transferred with the supernatant. Discard the plate/tube(s) with beads to which the unwanted, large DNA 
fragments/library molecules are bound. Technical Data Sheet KAPA HyperPrep Kit For Research Use Only. Not for use in diagnostic procedures.  15 
A1.6  Perform the second size cut by adding 0.2  volumes of KAPA cleanup beads to the supernatant from the first size 
cut, as follows:                           
> Component
> Fragmented dsDNA
> in 50 μL
> (1.0X –1.2X)
> Fragmented dsDNA
> in 130 μL
> (1.0X –1.2X)
> Adapter-ligated
> or amplified DNA
> (0.7X –0.9X)
> Supernatant from first size cut 95 μL 255 μL 80 μL
> KAPA cleanup beads 10 μL 26 μL 10 μL
> Total volume per well/tube: 105 μL 281 μL 90 μL
A1.7  Mix thoroughly by vortexing and/or pipetting up 
and down multiple times. 
A1.8  Incubate the plate/tube(s) at room temperature 
for 5  – 15  min to bind the DNA fragments/library 
molecules that will eventually be retained to the 
beads. 
A1.9  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
A1.10  Carefully remove and discard the supernatant, 
which contains all unwanted, small DNA fragments/ 
library molecules. 
A1.11  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
A1.12  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
A1.13  Carefully remove and discard the ethanol. 
A1.14  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
A1.15  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
A1.16  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
A1.17  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
A1.18  Remove the plate/tube(s) from the magnet. 
A1.19  Thoroughly resuspend the beads in the required 
volume of elution buffer (10  mM Tris-HCl, 
pH  8.0  – 8.5), or PCR-grade water for capture 
libraries: 
• For fragmented dsDNA, elute in ~55  μL and 
use 50  μL in the end repair and A-tailing 
reaction. 
• For adapter-ligated library DNA, either elute in 
~25  μL and use 20  μL in the library amplification 
reaction, or elute in the volume required for the 
next step in your workflow (e.g., target capture 
or sequencing). 
• For amplified library DNA, elute in the volume 
required for the next step in your workflow 
(e.g., target capture or sequencing). 
A1.20  Incubate the plate/tube(s) at room temperature for 
2 min to elute DNA off the beads. 
A1.21  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
A1.22  Transfer the clear supernatant with size-selected 
DNA to a new plate/tube(s) and proceed with the 
next step in your workflow, or store DNA at +2°C 
to +8°C for 1  – 2 weeks, or at -15°C to -25°C for 
up to 3 months. Technical Data Sheet KAPA HyperPrep Kit 16  For Research Use Only. Not for use in diagnostic procedures. 
> Manufacturing, R & D
> Cape Town, South Africa
> Tel: +27 21 448 8200
> Fax: +27 21 448 6503
> Technical Support
> sequencing.roche.com/support © 2019 KAPA and SEQCAP are trademarks of Roche. All other product names and trademarks are the property of their respective
> owners.
## Restrictions and Liabilities 
This technical data sheet is provided “as is” and Kapa 
Biosystems assumes no responsibility for any typographical, 
technical, or other inaccuracies. The document is subject 
to change, without notice, in future editions. 
To the maximum extent permitted by applicable law, Kapa 
Biosystems disclaims all warranties, either express or 
implied, with regard to this technical data sheet and any 
information contained herein, including but not limited to 
the implied warranties of merchantability and fitness for 
a particular purpose. Kapa Biosystems shall not be liable 
for errors or for incidental or consequential damages in 
connection with the furnishing, use, or performance of this 
document or of any information contained herein. 
This document might contain references to third party 
sources of information, hardware or software, products, 
or services and/or third party web sites (collectively 
the “Third-Party Information”). Kapa Biosystems does 
not control, and is not responsible for, any Third-Party 
Information. The inclusion of Third-Party Information 
in this document does not imply endorsement by Kapa 
Biosystems of the Third-Party Information or the third 
party in any way. 
Kapa Biosystems is not responsible nor will be liable in 
any way for your use of any software or equipment that is 
not supplied by Kapa Biosystems in connection with your 
use of Kapa Biosystems products. 
Kapa Biosystems does not in any way guarantee or 
represent that you will obtain satisfactory results from 
using Kapa Biosystems products as described herein. The 
only warranties provided to you are included in the Limited 
Warranty enclosed with this document. You assume all risk 
in connection with your use of Kapa Biosystems products. 
## Note to Purchaser: Limited Product Warranty 
Any product that does not meet the performance standards 
stated in the product specification sheet will be replaced at 
no charge. This warranty limits our liability to the replacement 
of the product. No other warranties of any kind, express 
or implied, including without limitation, implied warranties 
of merchantability or fitness for a particular purpose, are 
provided by Kapa Biosystems. Kapa Biosystems shall 
have no liability for any direct, indirect, consequential or 
incidental damages arising out of the use, the results of use 
or the inability to use any product. 
## Note to Purchaser: Limited License 
KAPA HyperPrep Kits are developed, designed and sold 
exclusively for research purposes. Neither the product, 
nor any individual component, has been tested for use in 
diagnostics or for drug development, nor is it suitable for 
administration to humans or animals. Please refer to the 
SDS, which is available on request. 
Certain applications of this product are covered by 
patents issued to parties other than Kapa Biosystems and 
applicable in certain countries. Purchase of this product 
does not include a license to perform any such applications. 
Users of this product may therefore be required to obtain a 
patent license depending upon the particular application 
and country in which the product is used.