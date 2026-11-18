# Ligation sequencing DNA V14 (SQK-LSK114)
URL: https://nanoporetech.com/document/genomic-dna-by-ligation-sqk-lsk114
Oxford Nanopore Technologies
Document type icon
### MinION: Protocol
## Ligation sequencing DNA V14 (SQK-LSK114) V GDE\_9161\_v114\_revAC\_24Sep2025
* * *
This protocol:
*   Uses genomic DNA
*   Has a library preparation time of ~65 minutes
*   Can be used with a fragmentation step (optional)
*   Requires no PCR
*   Is compatible with R10.4.1 flow cells
For Research Use Only
FOR RESEARCH USE ONLY.
### Overview
This protocol:
*   Uses genomic DNA
*   Has a library preparation time of ~65 minutes
*   Can be used with a fragmentation step (optional)
*   Requires no PCR
*   Is compatible with R10.4.1 flow cells
For Research Use Only
Document version: GDE\_9161\_v114\_revAC\_24Sep2025
### 1\. Overview of the protocol
#### Introduction to the Ligation Sequencing Kit V14 (SQK-LSK114) protocol
This protocol describes how to carry out sequencing of a DNA sample using the Ligation Sequencing Kit V14 (SQK-LSK114). It is recommended that a Lambda control experiment is completed first to become familiar with the technology.
### Steps in the sequencing workflow:
**Prepare for your experiment**
You will need to:
*   Extract your DNA, and check its length, quantity and purity. **The quality checks performed during the protocol are essential in ensuring experimental success.**
*   Ensure you have your sequencing kit, the correct equipment and third-party reagents.
*   Download the software for acquiring and analysing your data.
*   Check your flow cell to ensure it has enough pores for a good sequencing run.
**Library preparation**
The Table below is an overview of the steps required in the library preparation, including timings and optional stopping points.
<table>
<thead>
<tr>
<th>Library preparation</th>
<th>Process</th>
<th>Time</th>
<th>Stop option</th>
</tr>
</thead>
<tbody>
<tr>
<td>DNA repair and end-prep</td>
<td>Repair the DNA and prepare the DNA ends for adapter attachment</td>
<td>35 minutes</td>
<td>4°C overnight</td>
</tr>
<tr>
<td>Adapter ligation and clean-up</td>
<td>Attach the sequencing adapters to the DNA ends</td>
<td>20 minutes</td>
<td>We recommend sequencing your library as soon as it is adapted.<p>DNA library can be stored at 4°C for short-term storage or for repeated use (such as re-loading your flow cell)</p>
<p>DNA library can be stored at -80°C for long-term storage.</p>
</td>
</tr>
<tr>
<td>Priming and loading the flow cell</td>
<td>Prime the flow cell and load the prepared library for sequencing</td>
<td>10 minutes</td>
<td>
</td>
</tr>
</tbody>
</table>
LSK114 DNA workflow
**Sequencing and analysis**
You will need to:
*   Start a sequencing run using the MinKNOW software which will collect raw data from the device and basecall reads.
*   Start the EPI2ME software and select a bioinformatics workflow to analyse your data.
### 2\. Equipment and consumables
###### Materials
*   1 µg (or 100-200 fmol) high molecular weight genomic DNA
*   OR >100 ng high molecular weight genomic DNA if performing DNA fragmentation
*   Ligation Sequencing Kit V14 (SQK-LSK114)
* * *
###### Consumables
*   MinION/GridION Flow Cell
*   Qubit dsDNA HS Assay Kit (Invitrogen, Q32851)
*   NEBNext® Companion Module v2 for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7672S or E7672L)
*   Freshly prepared 80% ethanol in nuclease-free water
*   Nuclease-free water (e.g. Thermo Scientific, AM9937)
*   Bovine Serum Albumin (BSA) (50 mg/ml) (e.g. Invitrogen™ UltraPure™ BSA 50 mg/ml, AM2616)
*   1.5 ml Eppendorf DNA LoBind tubes
*   0.2 ml thin-walled PCR tubes
*   Qubit™ Assay Tubes (Invitrogen, Q32856)
* * *
###### Equipment
*   MinION or GridION device
*   MinION/GridION Flow Cell Light Shield
*   Hula mixer (gentle rotator mixer)
*   Magnetic separation rack, suitable for 1.5 ml Eppendorf tubes
*   Microfuge
*   Vortex mixer
*   Thermal cycler
*   P1000 pipette and tips
*   P200 pipette and tips
*   P100 pipette and tips
*   P20 pipette and tips
*   P10 pipette and tips
*   P2 pipette and tips
*   Ice bucket with ice
*   Timer
*   Qubit™ fluorometer (or equivalent for QC check)
#### Adjust your sample input quantity depending on your initial DNA sample length:
<table>
<thead>
<tr>
<th>Fragment library length</th>
<th>Starting input</th>
</tr>
</thead>
<tbody>
<tr>
<td>Very short (&lt;1 kb)</td>
<td>200 fmol</td>
</tr>
<tr>
<td>Short (1-10 kb)</td>
<td>100–200 fmol</td>
</tr>
<tr>
<td>Long (&gt;10 kb)</td>
<td>1 µg</td>
</tr>
</tbody>
</table>
For more information on sample input and flow cell loading amounts for our ligation sequencing protocols please visit [our know-how document](https://nanoporetech.com/document/requirements/lig-seq-input-load "our know-how document").
#### Input DNA
#### How to QC your input DNA
It is important that the input DNA meets the quantity and quality requirements. Using too little or too much DNA, or DNA of poor quality (e.g. highly fragmented or containing RNA or chemical contaminants) can affect your library preparation.
For instructions on how to perform quality control of your DNA sample, please read the [Input DNA/RNA QC protocol](https://nanoporetech.com/document/input-dna-rna-qc "Input DNA/RNA QC protocol").
#### Chemical contaminants
Depending on how the DNA is extracted from the raw sample, certain chemical contaminants may remain in the purified DNA, which can affect library preparation efficiency and sequencing quality. Read more about contaminants on the [Contaminants page](https://community.nanoporetech.com/contaminants "Contaminants page") of the Community.
#### NEBNext® Companion Module v2 for Oxford Nanopore Technologies® Ligation Sequencing
We recommend buying the [NEBNext® Companion Module v2 for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7672S or E7672L)](https://www.neb.com/en-gb/e7672 "NEBNext® Companion Module v2 for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7672S or E7672L)"), which contains all the NEB reagents needed for use with the Ligation Sequencing Kit.
The previous version, NEBNext® Companion Module for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7180S or E7180L) is compatible, but the recommended v2 module offers more efficient dA-tailing and ligation, a result of the FFPEv2 DNA Repair Buffer and Salt-T4 DNA Ligase, respectively. A marked cost saving per sample preparation is also realised when using the v2 module.
**Note:** for our amplicon protocols, NEBNext FFPE DNA Repair Mix is not required and purchasing the required reagents separately is more cost effective.
#### Third-party reagents
We have validated and recommend the use of all the third-party reagents used in this protocol. Alternatives have not been tested by Oxford Nanopore Technologies.
For all third-party reagents, we recommend following the manufacturer's instructions to prepare the reagents for use.
#### Check your flow cell
We highly recommend that you check the number of pores in your flow cell prior to starting a sequencing experiment. This should be done within 12 weeks of purchasing your MinION/GridION/PromethION Flow Cells or within four weeks of purchasing Flongle Flow Cells. Oxford Nanopore Technologies will replace any unused flow cell with fewer than the number of pores listed in the Table below, when the result is reported within two days of performing the flow cell check, and when the storage recommendations have been followed. To do the flow cell check, please follow the instructions in the [Flow Cell Check document](https://nanoporetech.com/document/flow-cell-check "Flow Cell Check document").
<table>
<thead>
<tr>
<th>Flow cell</th>
<th>Minimum number of active pores covered by warranty</th>
</tr>
</thead>
<tbody>
<tr>
<td>Flongle Flow Cell</td>
<td>50</td>
</tr>
<tr>
<td>MinION/GridION Flow Cell</td>
<td>800</td>
</tr>
<tr>
<td>PromethION Flow Cell</td>
<td>5000</td>
</tr>
</tbody>
</table>
#### Ligation Sequencing Kit V14 (SQK-LSK114) contents
SQK-LSK114 Kit
**Note:** This product contains AMPure XP reagent manufactured by Beckman Coulter, Inc. and can be stored at -20°C with the kit without detriment to reagent stability.
**Note:** The DNA Control Sample (DCS) is a 3.6 kb standard amplicon mapping the 3' end of the Lambda genome.
### 3\. DNA repair and end-prep
###### Materials
*   1 µg (or 100-200 fmol) gDNA
*   DNA Control Sample (DCS)
*   AMPure XP Beads (AXP)
* * *
###### Consumables
*   NEBNext® FFPE DNA Repair Mix from the NEBNext® Companion Module v2 (NEB, E7672S or E7672L)
*   NEBNext® FFPE DNA Repair Buffer v2 from the NEBNext® Companion Module v2 (NEB, E7672S or E7672L)
*   NEBNext® Ultra II End Prep Enzyme Mix from the NEBNext® Companion Module v2 (NEB, E7672S or E7672L)
*   Qubit dsDNA HS Assay Kit (Invitrogen, Q32851)
*   Nuclease-free water (e.g. Thermo Scientific, AM9937)
*   Freshly prepared 80% ethanol in nuclease-free water
*   Qubit™ Assay Tubes (Invitrogen, Q32856)
*   0.2 ml thin-walled PCR tubes
*   1.5 ml Eppendorf DNA LoBind tubes
* * *
###### Equipment
*   P1000 pipette and tips
*   P100 pipette and tips
*   P10 pipette and tips
*   Microfuge
*   Thermal cycler
*   Hula mixer (gentle rotator mixer)
*   Magnetic separation rack
*   Ice bucket with ice
*   Qubit™ fluorometer (or equivalent for QC check)
#### We recommend using the NEBNext® Companion Module v2 for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7672S or E7672L), which contains all the NEB reagents needed for use with the Ligation Sequencing Kit.
The previous version, NEBNext® Companion Module for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7180S or E7180L) is also compatible, but the recommended v2 module offers more efficient dA-tailing and ligation.
#### Check your flow cell
We recommend performing a flow cell check before starting your library prep to ensure you have a flow cell with sufficient pores for a good sequencing run.
See the [flow cell check document](https://nanoporetech.com/https://nanoporetech.com/document/flow-cell-check "flow cell check document") for more information.
#### We recommend using the DNA Control Sample (DCS) in your library prep for troubleshooting purposes. However, you can omit this step and make up the extra 1 µl with your sample DNA.
For optimal performance, NEB recommend the following:
1.  Thaw all reagents on ice.
2.  Flick and/or invert the reagent tubes to ensure they are well mixed.  
    **Note:** Do not vortex the FFPE DNA Repair Mix or Ultra II End Prep Enzyme Mix.
3.  Always spin down tubes before opening for the first time each day.
4.  Vortex the FFPE DNA Repair Buffer v2 to ensure it is well mixed.  
    **Note:** This buffer may contain a white precipitate. If this occurs, allow the mixture to come to room temperature and pipette the buffer several times to break up the precipitate, followed by a quick vortex to mix.
5.  The FFPE DNA Repair Buffer v2 may have a yellow tinge and is fine to use if yellow.
1.  Transfer 1 μg (or 100-200 fmol) input DNA into a 1.5 ml Eppendorf DNA LoBind tube.
2.  Adjust the volume to 47 μl with nuclease-free water.
3.  Mix thoroughly by pipetting up and down, or by flicking the tube.
4.  Spin down briefly in a microfuge.
Between each addition, pipette mix 10-20 times.
<table>
<thead>
<tr>
<th>Reagent</th>
<th>Volume</th>
</tr>
</thead>
<tbody>
<tr>
<td>DNA from the previous step</td>
<td>47 µl</td>
</tr>
<tr>
<td>DNA CS (optional)</td>
<td>1 µl</td>
</tr>
<tr>
<td>NEBNext FFPE DNA Repair Buffer v2</td>
<td>7 µl</td>
</tr>
<tr>
<td>NEBNext FFPE DNA Repair Mix</td>
<td>2 µl</td>
</tr>
<tr>
<td>Ultra II End-prep Enzyme Mix</td>
<td>3 µl</td>
</tr>
<tr>
<td>
<strong>Total</strong>
</td>
<td>
<strong>60 µl</strong>
</td>
</tr>
</tbody>
</table>
### 4\. Adapter ligation and clean-up
###### Materials
*   Ligation Adapter (LA)
*   Ligation Buffer (LNB)
*   Long Fragment Buffer (LFB)
*   S Fragment Buffer (SFB)
*   AMPure XP Beads (AXP)
*   Elution Buffer (EB)
* * *
###### Consumables
*   Salt-T4® DNA Ligase (NEB, M0467)
*   1.5 ml Eppendorf DNA LoBind tubes
*   Qubit dsDNA HS Assay Kit (Invitrogen, Q32851)
*   Qubit™ Assay Tubes (Invitrogen, Q32856)
* * *
###### Equipment
*   Magnetic separation rack
*   Microfuge
*   Vortex mixer
*   P1000 pipette and tips
*   P100 pipette and tips
*   P20 pipette and tips
*   P10 pipette and tips
*   Qubit™ fluorometer (or equivalent for QC check)
#### We recommend using the Salt-T4® DNA Ligase (NEB, M0467).
Salt-T4® DNA Ligase (NEB, M0467) can be bought separately or is provided in the NEBNext® Companion Module v2 for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7672S or E7672L).
The Quick T4 DNA Ligase (NEB, E6057) available in the previous version NEBNext® Companion Module for Oxford Nanopore Technologies® Ligation Sequencing (NEB, E7180S or E7180L) is also compatible, but the new recommended reagent offers more efficient end ligation.
#### Depending on the wash buffer (LFB or SFB) used, the clean-up step after adapter ligation is designed to either enrich for DNA fragments of >3 kb, or purify all fragments equally.
*   To enrich for DNA fragments of 3 kb or longer, use Long Fragment Buffer (LFB)
*   To retain DNA fragments of all sizes, use Short Fragment Buffer (SFB)
Between each addition, pipette mix 10-20 times.
<table>
<thead>
<tr>
<th>Reagent</th>
<th>Volume</th>
</tr>
</thead>
<tbody>
<tr>
<td>DNA sample from the previous step</td>
<td>60 µl</td>
</tr>
<tr>
<td>Ligation Adapter (LA)</td>
<td>5 µl</td>
</tr>
<tr>
<td>Ligation Buffer (LNB)</td>
<td>25 µl</td>
</tr>
<tr>
<td>Salt-T4® DNA Ligase</td>
<td>10 µl</td>
</tr>
<tr>
<td>
<strong>Total</strong>
</td>
<td>
<strong>100 µl</strong>
</td>
</tr>
</tbody>
</table>
Dispose of the pelleted beads
<table>
<thead>
<tr>
<th>Fragment library length</th>
<th>Flow cell loading amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Very short (&lt;1 kb)</td>
<td>100 fmol</td>
</tr>
<tr>
<td>Short (1-10 kb)</td>
<td>35–50 fmol</td>
</tr>
<tr>
<td>Long (&gt;10 kb)</td>
<td>300 ng</td>
</tr>
</tbody>
</table>
**Note:** If the library yields are below the input recommendations, load the entire library.
If required, we recommend using a mass to mol calculator such as the [NEB calculator](https://nebiocalculator.neb.com/#!/dsdnaamt "NEB calculator").
#### Library storage recommendations
We recommend storing libraries in Eppendorf DNA LoBind tubes at **4°C for short-term** storage or repeated use, for example, re-loading flow cells between washes. For single use and **long-term storage** of more than 3 months, we recommend storing libraries at **\-80°C** in Eppendorf DNA LoBind tubes.
### 5\. Priming and loading the MinION and GridION Flow Cell
###### Materials
*   Flow Cell Flush (FCF)
*   Flow Cell Tether (FCT)
*   Library Solution (LIS)
*   Library Beads (LIB)
*   Sequencing Buffer (SB)
* * *
###### Consumables
*   MinION/GridION Flow Cell
*   Nuclease-free water (e.g. ThermoFisher, AM9937)
*   Bovine Serum Albumin (BSA) (50 mg/ml) (e.g. Invitrogen™ UltraPure™ BSA 50 mg/ml, AM2616)
*   1.5 ml Eppendorf DNA LoBind tubes
* * *
###### Equipment
*   MinION or GridION device
*   MinION/GridION Flow Cell Light Shields
*   P1000 pipette and tips
*   P100 pipette and tips
*   P20 pipette and tips
*   P10 pipette and tips
#### Take the flow cell out of the fridge and leave it at room temperature for 20 minutes. This will improve visibility of the array during priming and sample loading.
#### For optimal sequencing performance and improved output on MinION R10.4.1 flow cells (FLO-MIN114), add Bovine Serum Albumin (BSA) to the flow cell priming mix at a final concentration of 0.2 mg/ml.
**Note:** We do not recommend using any other albumin type (e.g. recombinant human serum albumin).
In a suitable tube for the number of flow cells, combine the following reagents:
<table>
<thead>
<tr>
<th>Reagent</th>
<th>Volume per flow cell</th>
</tr>
</thead>
<tbody>
<tr>
<td>Flow Cell Flush (FCF)</td>
<td>1,170 µl</td>
</tr>
<tr>
<td>Bovine Serum Albumin (BSA) at 50 mg/ml</td>
<td>5 µl</td>
</tr>
<tr>
<td>Flow Cell Tether (FCT)</td>
<td>30 µl</td>
</tr>
<tr>
<td>
<strong>Total volume</strong>
</td>
<td>
<strong>1,205 µl</strong>
</td>
</tr>
</tbody>
</table>
Flow Cell Loading Diagrams Step 1a
Flow Cell Loading Diagrams Step 1b 
#### Complete a flow cell check to assess the number of pores available before loading the library.
This step can be omitted if the flow cell has been checked previously.
See the [flow cell check document](https://nanoporetech.com/https://nanoporetech.com/document/flow-cell-check "flow cell check document") for more information.
Flow Cell Loading Diagrams Step 2
1.  Set a P1000 pipette to 200 µl
2.  Insert the tip into the priming port
3.  Turn the wheel until the dial shows 220-230 µl, to draw back 20-30 µl, or until you can see a small volume of buffer entering the pipette tip
**Note:** Visually check that there is continuous buffer from the priming port across the sensor array.
Flow Cell Loading Diagrams Step 03 V5
Flow Cell Loading Diagrams Step 04 V5
#### The Library Beads (LIB) tube contains a suspension of beads. These beads settle very quickly. It is vital that they are mixed immediately before use.
We recommend using the Library Beads (LIB) for most sequencing experiments. However, the Library Solution (LIS) is available for more viscous libraries.
<table>
<thead>
<tr>
<th>Reagent</th>
<th>Volume per flow cell</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sequencing Buffer (SB)</td>
<td>37.5 µl</td>
</tr>
<tr>
<td>Library Beads (LIB) mixed immediately before use, or Library Solution (LIS), if using</td>
<td>25.5 µl</td>
</tr>
<tr>
<td>DNA library</td>
<td>12 µl</td>
</tr>
<tr>
<td>
<strong>Total</strong>
</td>
<td>
<strong>75 µl</strong>
</td>
</tr>
</tbody>
</table>
1.  Gently lift the SpotON sample port cover to make the SpotON sample port accessible.
2.  Load **200 µl** of the priming mix into the flow cell priming port (**not** the SpotON sample port), avoiding the introduction of air bubbles.
Flow Cell Loading Diagrams Step 5
Flow Cell Loading Diagrams Step 06 V5
Flow Cell Loading Diagrams Step 07 V5
Step 8 update
Flow Cell Loading Diagrams Step 9
#### For optimal sequencing output, install the light shield on your flow cell as soon as the library has been loaded.
We recommend leaving the light shield on the flow cell when library is loaded, including during any washing and reloading steps. The shield can be removed when the library has been removed from the flow cell.
1.  Carefully place the leading edge of the light shield against the clip. **Note:** Do not force the light shield underneath the clip.
2.  Gently lower the light shield onto the flow cell. The light shield should sit around the SpotON cover, covering the entire top section of the flow cell.
J2264 - Light shield animation Flow Cell FAW optimised
#### When a flow cell is inserted into the MinION Mk1D, the device lid will sit on top of the flow cell, leaving a small gap around the sides. This is normal and has no impact on the performance of the device.
Please refer to this [FAQ](https://nanoporetech.com/support/devices/MinION-Mk1D/does-the-lid-on-the-minion-mk1d-block-out-all-the-light- "FAQ") regarding the device lid.
MinION Mk1D with flow cell
### 6\. Data acquisition and basecalling
#### How to start sequencing
Once you have loaded your flow cell, the sequencing run can be started on MinKNOW, our sequencing software that controls the device, data acquisition and real-time basecalling. For more detailed information on setting up and using MinKNOW, please see the [MinKNOW protocol](https://nanoporetech.com/document/experiment-companion-minknow "MinKNOW protocol").
MinKNOW can be used and set up to sequence in multiple ways:
*   On a computer either directly or remotely connected to a sequencing device.
*   Directly on a GridION or PromethION 24/48 sequencing device.
For more information on using MinKNOW on a sequencing device, please see the device user manuals:
*   [MinION Mk1D user manual](https://nanoporetech.com/document/minion-mk1d-user-manual "MinION Mk1D user manual")
*   [GridION user manual](https://nanoporetech.com/document/gridion-user-manual "GridION user manual")
* * *
To start a sequencing run on MinKNOW:
1\. Navigate to the start page and click **Start sequencing.**
2\. Fill in your experiment details, such as name and flow cell position and sample ID.
3\. Select the **Ligation Sequencing Kit V14 (SQK-LSK114)** on the Kit page.
4\. Configure the sequencing and output parameters for your sequencing run or keep to the default settings on the Run configuration tab.
**Note:** If basecalling was turned off when a sequencing run was set up, basecalling can be performed post-run on MinKNOW. For more information, please see the [MinKNOW protocol](https://nanoporetech.com/document/experiment-companion-minknow "MinKNOW protocol").
5\. Click **Start** to initiate the sequencing run.
#### Data analysis after sequencing
After sequencing has completed on MinKNOW, the flow cell can be reused or returned, as outlined in the Flow cell reuse and returns section.
After sequencing and basecalling, the data can be analysed. For further information about options for basecalling and post-basecalling analysis, please refer to the [Data Analysis](https://nanoporetech.com/document/data-analysis "Data Analysis") document.
In the Downstream analysis section, we outline further options for analysing your data.
### 7\. Flow cell reuse and returns
###### Materials
*   Flow Cell Wash Kit (EXP-WSH004)
Instructions for returning flow cells can be found [here](https://nanoporetech.com/upsflowcellreturn "here").
### 8\. Downstream analysis
#### Post-basecalling analysis
There are several options for further analysing your basecalled data:
### EPI2ME workflows
For in-depth data analysis, Oxford Nanopore Technologies offers a range of bioinformatics tutorials and workflows available in EPI2ME, which are available in the [EPI2ME](https://labs.epi2me.io/ "EPI2ME") section of the Community. The platform provides a vehicle where workflows deposited in GitHub by our Research and Applications teams can be showcased with descriptive texts, functional bioinformatics code and example data.
### Research analysis tools
Oxford Nanopore Technologies' Research division has created a number of analysis tools, that are available in the Oxford Nanopore [GitHub repository](https://github.com/nanoporetech "GitHub repository"). The tools are aimed at advanced users, and contain instructions for how to install and run the software. They are provided as-is, with minimal support.
If a data analysis method for your research question is not provided in any of the resources above, please refer to the [resource centre](https://nanoporetech.com/resource-centre "resource centre") and search for bioinformatics tools for your application. Numerous members of the Nanopore Community have developed their own tools and pipelines for analysing nanopore sequencing data, most of which are available on GitHub. Please be aware that these tools are not supported by Oxford Nanopore Technologies, and are not guaranteed to be compatible with the latest chemistry/software configuration.
### 9\. Issues during DNA/RNA extraction and library preparation
#### Low sample quality
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Low DNA purity (Nanodrop reading for DNA OD 260/280 is &lt;1.8 and OD 260/230 is &lt;2.0–2.2)</strong>
</td>
<td>The DNA extraction method does not provide the required purity</td>
<td>The effects of contaminants are shown in the <a href="https://community.nanoporetech.com/contaminants" title="Contaminants" target="_blank">Contaminants</a> document. Please try an alternative <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=extraction-protocols" title="extraction method" target="_blank">extraction method</a> that does not result in contaminant carryover.<p>Consider performing an additional SPRI clean-up step.</p>
</td>
</tr>
<tr>
<td>
<strong>Low RNA integrity (RNA integrity number &lt;9.5 RIN, or the rRNA band is shown as a smear on the gel)</strong>
</td>
<td>The RNA degraded during extraction</td>
<td>Try a different <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=extraction-protocols" title="RNA extraction method" target="_blank">RNA extraction method</a>. For more info on RIN, please see the <a href="https://nanoporetech.com/document/requirements/rna-integrity-number" title="RNA Integrity Number" target="_blank">RNA Integrity Number</a> document. Further information can be found in the <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=dna-handling" title="DNA/RNA Handling" target="_blank">DNA/RNA Handling</a> page.</td>
</tr>
<tr>
<td>
<strong>RNA has a shorter than expected fragment length</strong>
</td>
<td>The RNA degraded during extraction</td>
<td>Try a different <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=extraction-protocols" title="RNA extraction method" target="_blank">RNA extraction method</a>. For more info on RIN, please see the <a href="https://nanoporetech.com/document/requirements/rna-integrity-number" title="RNA Integrity Number" target="_blank">RNA Integrity Number</a> document. Further information can be found in the <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=dna-handling" title="DNA/RNA Handling" target="_blank">DNA/RNA Handling</a> page.<p>We recommend working in an RNase-free environment, and to keep your lab equipment RNase-free when working with RNA.</p>
</td>
</tr>
</tbody>
</table>
#### Low DNA recovery after AMPure bead clean-up
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Low recovery</strong>
</td>
<td>DNA loss due to a lower than intended AMPure beads-to-sample ratio</td>
<td>1. AMPure beads settle quickly, so ensure they are well resuspended before adding them to the sample.<p>2. When the AMPure beads-to-sample ratio is lower than 0.4:1, DNA fragments of any size will be lost during the clean-up.</p>
</td>
</tr>
<tr>
<td>
<strong>Low recovery</strong>
</td>
<td>DNA fragments are shorter than expected</td>
<td>The lower the AMPure beads-to-sample ratio, the more stringent the selection against short fragments. Please always determine the input DNA length on an agarose gel (or other gel electrophoresis methods) and then calculate the appropriate amount of AMPure beads to use. <img src="https://a.storyblok.com/f/196663/958x577/bbb37e41cb/spri_cleanup.jpg" alt="SPRI cleanup" title="SPRI cleanup">
</td>
</tr>
<tr>
<td>
<strong>Low recovery after end-prep</strong>
</td>
<td>The wash step used ethanol &lt;70%</td>
<td>DNA will be eluted from the beads when using ethanol &lt;70%. Make sure to use the correct percentage.</td>
</tr>
</tbody>
</table>
### 10\. Issues during the sequencing run
#### Fewer pores at the start of sequencing than after Flow Cell Check
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>MinKNOW reported a lower number of pores at the start of sequencing than the number reported by the Flow Cell Check</strong>
</td>
<td>An air bubble was introduced into the nanopore array</td>
<td>After the Flow Cell Check it is essential to remove any air bubbles near the priming port before priming the flow cell. If not removed, the air bubble can travel to the nanopore array and irreversibly damage the nanopores that have been exposed to air. The best practice to prevent this from happening is demonstrated in videos for <a href="https://community.nanoporetech.com/nanopore_learning/lessons/priming-and-loading-your-flow-cell" title="how to load a MinION Flow Cell" target="_blank">how to load a MinION Flow Cell</a> and <a href="https://nanoporetech.com/resource-centre/masterclass-how-to-load-a-promethion-flow-cell-lc25" title="how to load a PromethION Flow Cell" target="_blank">how to load a PromethION Flow Cell</a>.</td>
</tr>
<tr>
<td>
<strong>MinKNOW reported a lower number of pores at the start of sequencing than the number reported by the Flow Cell Check</strong>
</td>
<td>The flow cell is not correctly inserted into the device</td>
<td>Stop the sequencing run, remove the flow cell from the sequencing device and insert it again, checking that the flow cell is firmly seated in the device and that it has reached the target temperature. If applicable, try a different position on the device (GridION/PromethION).</td>
</tr>
<tr>
<td>
<strong>MinKNOW reported a lower number of pores at the start of sequencing than the number reported by the Flow Cell Check</strong>
</td>
<td>Contaminations in the library damaged or blocked the pores</td>
<td>The pore count during the Flow Cell Check is performed using the QC DNA molecules present in the flow cell storage buffer. At the start of sequencing, the library itself is used to estimate the number of active pores. Because of this, variability of about 10% in the number of pores is expected. A significantly lower pore count reported at the start of sequencing can be due to contaminants in the library that have damaged the membranes or blocked the pores. Alternative DNA/RNA extraction or purification methods may be needed to improve the purity of the input material. The effects of contaminants are shown in the <a href="https://community.nanoporetech.com/contaminants" title="Contaminants Know-how piece" target="_blank">Contaminants Know-how piece</a>. Please try an alternative <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=extraction-protocols" title="extraction method" target="_blank">extraction method</a> that does not result in contaminant carryover.</td>
</tr>
</tbody>
</table>
#### MinKNOW script failed
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>MinKNOW shows "Script failed"</strong>
</td>
<td>
<br>
</td>
<td>Restart the computer and then restart MinKNOW. If the issue persists, please collect the <a href="https://community.nanoporetech.com/support/articles/231" title="MinKNOW log files" target="_blank">MinKNOW log files</a> and contact Technical Support. If you do not have another sequencing device available, we recommend storing the flow cell and the loaded library at 4°C and contact Technical Support for further storage guidance.</td>
</tr>
</tbody>
</table>
#### Pore occupancy below 40%
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Pore occupancy &lt;40%</strong>
</td>
<td>Not enough library was loaded on the flow cell</td>
<td>Ensure the correct volume and concentration as stated on the appropriate protocol for your sequencing library is loaded onto the flow cell. Please quantify the library before loading and calculate fmols using tools like the <a href="https://www.promega.com/resources/tools/biomath/?calc=molarity" title="Promega Biomath Calculator" target="_blank">Promega Biomath Calculator</a>, choosing "dsDNA: µg to fmol"</td>
</tr>
<tr>
<td>
<strong>Pore occupancy close to 0</strong>
</td>
<td>The Ligation Sequencing Kit was used, and sequencing adapters did not ligate to the DNA</td>
<td>Make sure to use the NEBNext Quick Ligation Module (E6056) and Oxford Nanopore Technologies Ligation Buffer (LNB, provided in the sequencing kit) at the sequencing adapter ligation step, and use the correct amount of each reagent. A Lambda control library can be prepared to test the integrity of the third-party reagents.</td>
</tr>
<tr>
<td>
<strong>Pore occupancy close to 0</strong>
</td>
<td>The Ligation Sequencing Kit was used, and ethanol was used instead of LFB or SFB at the wash step after sequencing adapter ligation</td>
<td>Ethanol can denature the motor protein on the sequencing adapters. Make sure the LFB or SFB buffer was used after ligation of sequencing adapters.</td>
</tr>
<tr>
<td>
<strong>Pore occupancy close to 0</strong>
</td>
<td>No tether on the flow cell</td>
<td>Tethers are adding during flow cell priming (FLT tube for Kit 9, 10, 11, FCT for Kit 14, and FTU for ultra-long DNA kits). Make sure FLT/FCT/FTU was added to the buffer (FB for Kit 9, 10, 11, and FCF for Kit 14) before priming.</td>
</tr>
</tbody>
</table>
#### Shorter than expected read length
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Shorter than expected read length</strong>
</td>
<td>Unwanted fragmentation of DNA sample</td>
<td>Read length reflects input DNA fragment length. Input DNA can be fragmented during extraction and library prep.<p>1. Please review the <a href="https://nanoporetech.com/documentation/results?category=prepare&amp;topic=extraction-protocols" title="Extraction Methods" target="_blank">Extraction Methods</a> in the Nanopore Community for best practice for extraction.</p>
<p>2. Visualise the input DNA fragment length distribution on an agarose gel before proceeding to the library prep. <img src="https://a.storyblok.com/f/196663/685x336/6b3e3fae3b/dna_gel2.png" alt="DNA gel2" title="DNA gel2"> In the image above, Sample 1 is of high molecular weight, whereas Sample 2 has been fragmented.</p>
<p>3. During library prep, avoid pipetting and vortexing when mixing reagents. Flicking or inverting the tube is sufficient.</p>
</td>
</tr>
</tbody>
</table>
#### Large proportion of unavailable pores
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Large proportion of unavailable pores (shown as blue in the channels panel and pore activity plot)</strong>
<p>
<img src="https://a.storyblok.com/f/196663/1470x580/f56862d6d4/image2022-3-25_10-43-25.png" alt="image2022-3-25 10-43-25" title="image2022-3-25 10-43-25"> The pore activity plot above shows an increasing proportion of "unavailable" pores over time.</p>
</td>
<td>Contaminants are present in the sample</td>
<td>Some contaminants can be cleared from the pores by the unblocking function built into MinKNOW. If this is successful, the pore status will change to "sequencing pore". If the portion of unavailable pores stays large or increases:<p>1. A <a href="https://nanoporetech.com/document/flow-cell-wash-kit-exp-wsh004" title="nuclease flush using the Flow Cell Wash Kit (EXP-WSH004)" target="_blank">nuclease flush using the Flow Cell Wash Kit (EXP-WSH004)</a> can be performed, or<br>2. Run several cycles of PCR to try and dilute any contaminants that may be causing problems.</p>
</td>
</tr>
</tbody>
</table>
#### Large proportion of inactive pores
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Large proportion of inactive/unavailable pores (shown as light blue in the channels panel and pore activity plot. Pores or membranes are irreversibly damaged)</strong>
</td>
<td>Air bubbles have been introduced into the flow cell</td>
<td>Air bubbles introduced through flow cell priming and library loading can irreversibly damage the pores. Watch the <a href="https://community.nanoporetech.com/nanopore_learning/lessons/priming-and-loading-your-flow-cell" title="how to load a MinION Flow Cell" target="_blank">how to load a MinION Flow Cell</a> or <a href="https://nanoporetech.com/resource-centre/masterclass-how-to-load-a-promethion-flow-cell-lc25" title="how to load a PromethION Flow Cell" target="_blank">how to load a PromethION Flow Cell</a> videos for best practice.</td>
</tr>
<tr>
<td>
<strong>Large proportion of inactive/unavailable pores</strong>
</td>
<td>Certain compounds co-purified with DNA</td>
<td>Known compounds, include polysaccharides, typically associate with plant genomic DNA.<p>1. Please refer to the <a href="https://nanoporetech.com/document/extraction-method-group/plant-leaf-gDNA" title="Plant leaf DNA extraction method" target="_blank">Plant leaf DNA extraction method</a>.<br>2. Clean-up using the QIAGEN PowerClean Pro kit.<br>3. Perform a whole genome amplification with the original gDNA sample using the QIAGEN REPLI-g kit.</p>
</td>
</tr>
<tr>
<td>
<strong>Large proportion of inactive/unavailable pores</strong>
</td>
<td>Contaminants are present in the sample</td>
<td>The effects of contaminants are shown in the <a href="https://community.nanoporetech.com/contaminants" title="Contaminants" target="_blank">Contaminants</a> Know-how piece. Please try an alternative extraction method that does not result in contaminant carryover.</td>
</tr>
</tbody>
</table>
#### Temperature fluctuation
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Temperature fluctuation</strong>
</td>
<td>The flow cell has lost contact with the device</td>
<td>Check that there is a heat pad covering the metal plate on the back of the flow cell. Re-insert the flow cell and press it down to make sure the connector pins are firmly in contact with the device. If the problem persists, please contact Technical Services.</td>
</tr>
</tbody>
</table>
#### Failed to reach target temperature
<table>
<thead>
<tr>
<th>Observation</th>
<th>Possible cause</th>
<th>Comments and actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>MinKNOW shows "Failed to reach target temperature"</strong>
</td>
<td>The instrument was placed in a location that is colder than normal <span role="link" data-attribute-id="explainer-27">room temperature<nano-icon name="regular/circle-info" role="presentation" size="auto">
</nano-icon>
</span>, or a location with poor ventilation (which leads to the flow cells overheating)</td>
<td>MinKNOW has a default timeframe for the flow cell to reach the target temperature. Once the timeframe is exceeded, an error message will appear and the sequencing experiment will continue. However, sequencing at an incorrect temperature may lead to a decrease in throughput and lower q-scores. Please adjust the location of the sequencing device to ensure that it is placed at <span role="link" data-attribute-id="explainer-27">room temperature<nano-icon name="regular/circle-info" role="presentation" size="auto">
</nano-icon>
</span> with good ventilation, then re-start the process in MinKNOW. Please refer to <a href="https://nanoporetech.com/support/devices/MinION-Mk1B/minion-temperature-control" title="this link" target="_blank">this link</a> for more information on MinION temperature control.</td>
</tr>
</tbody>
</table>
#### Continuous buffer
Visually inspect the sample port, inlet channel and sensor array to make sure the buffer is continuous and no significant air bubbles are present.
Air bubbles may develop under the sample port cover. If any air bubble is present, using a Gilson P1000 pipette gently draw back the air bubble into the tip. Only a few microlitres should be removed, and the sensor array and inlet channel should have buffer across them at all times. There is a small excess of buffer in the flow cell to allow for this process, but beware of drawing back too much.
#### Pellet the beads
When pelleting beads, it is important to leave the tube on the magnet until the supernatant is clear and colourless to ensure maximum recovery of the DNA/RNA library. You can check whether all the beads have pelleted by looking inside the tube from the top down.
#### DNA Control Sample
DNA Control Sample (DNA CS) is a positive control strand introduced during library preparation. It is a 3.6 kb standard amplicon and is used to QC the library.
#### Pellet on a magnet
It is important that all the beads are in the pellet. Beads which remain in the supernatant will result in the loss of some of the DNA/RNA.
#### Room temperature
Room temperature refers to a temperature between 18 and 23 °C.
#### Tube flicking
[](https://ont-experimentcompanion-live.s3.amazonaws.com/2017/08/21/14/29/19/ab5df4f0-4330-4fcc-9c4f-ecb9152d9832/flicking.gif)
#### Spin down
[](https://ont-experimentcompanion-live.s3.amazonaws.com/2017/08/21/14/30/18/ef2cdccc-0839-48fa-add7-e14fdf23bfe5/centrifuge.gif)
#### Hula mixer
[](https://ont-experimentcompanion-live.s3.amazonaws.com/2017/09/21/10/35/13/8626d118-9751-41ea-8996-df0b3846a91f/hula-mixer.gif)
Oxford Nanopore Technologies, the Wheel icon, AmPORE-TB, EPI2ME, GridION, MinION, MinKNOW, PromethION, P2 Solo, and P2 are registered trademarks or the subject of trademark applications of Oxford Nanopore Technologies plc in various countries. Information contained herein may be protected by copyright, patents or patents pending of Oxford Nanopore Technologies plc. All other brands and names contained are the property of their respective owners. Oxford Nanopore Technologies products are RUO. Products labelled/branded as Oxford Nanopore Diagnostics may be RUO or may be regulated as in‐vitro diagnostic devices in some jurisdictions, please check individual product labelling. ONT plc is a member of the producer compliance scheme run by ERP UK Ltd, who manage the submission of documentation in support of WEEE compliance for ONT plc’s manufacture and supply of Electrical and Electronic equipment in the UK. ONT’s WEEE PRN is WEE/MM3828AA.